"use client";

import {useEffect, useMemo, useState} from "react";
import Image from "next/image";
import {useSearchParams} from "next/navigation";
import * as z from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {CalendarIcon, Globe, Layers, LineChart, Loader2, Shield, Users} from "lucide-react";

import PageHeader from "@/components/PageHeader";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Button} from "@/components/ui/button";
import {useToast} from "@/hooks/use-toast";
import {getMonchainApiBase, getUssApiKey} from "@/lib/config";
import countries from "@/countries.json";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Calendar} from "@/components/ui/calendar";
import {cn} from "@/lib/utils";
import {format} from "date-fns";

interface Option {
    value: string;
    label: string;
}

const productOptions: Option[] = [
    {value: "monchain-check", label: "Monchain Check (Risk APIs)"},
    {value: "monchain-wallet", label: "Monchain Wallet"},
    {value: "xai-safety", label: "Explainable Safety Stack"},
    {value: "custom-agent", label: "Custom AI Agent Program"},
];

const aboutOptions: Option[] = [
    {value: "compliance", label: "Compliance & KYB"},
    {value: "risk-ops", label: "Fraud / Risk Ops"},
    {value: "exchange", label: "Exchanges & OTC"},
    {value: "infrastructure", label: "Infrastructure Partner"},
    {value: "investor", label: "Investor / Strategic"},
];

const fundingStageOptions: Option[] = [
    {value: "pre-seed", label: "Pre-seed"},
    {value: "seed", label: "Seed"},
    {value: "series-a", label: "Series A"},
    {value: "series-b", label: "Series B"},
    {value: "growth", label: "Growth / Public"},
];

const volumeOptions: Option[] = [
    {value: "under-1m", label: "Under $1M"},
    {value: "1m-5m", label: "$1M – $5M"},
    {value: "5m-20m", label: "$5M – $20M"},
    {value: "20m-100m", label: "$20M – $100M"},
    {value: "100m-plus", label: "$100M+"},
];

const userBaseOptions: Option[] = [
    {value: "under-10k", label: "< 10K"},
    {value: "10k-50k", label: "10K – 50K"},
    {value: "50k-250k", label: "50K – 250K"},
    {value: "250k-1m", label: "250K – 1M"},
    {value: "1m-plus", label: "1M+"},
];

const countryOptions: Option[] = Object.entries(countries).map(([code, name]) => ({
    value: code,
    label: name,
}));

const productValues = productOptions.map((option) => option.value) as [string, ...string[]];
const aboutValues = aboutOptions.map((option) => option.value) as [string, ...string[]];
const fundingValues = fundingStageOptions.map((option) => option.value) as [string, ...string[]];
const volumeValues = volumeOptions.map((option) => option.value) as [string, ...string[]];
const userValues = userBaseOptions.map((option) => option.value) as [string, ...string[]];
const countryValues = countryOptions.map((option) => option.value) as [string, ...string[]];

const formSchema = z.object({
    contactName: z.string().min(1, "Full name is required").max(120, "Name is too long"),
    workEmail: z.string().email("Please use a valid work email"),
    role: z.string().min(1, "Role is required"),
    companyName: z.string().min(1, "Company is required"),
    companyWebsite: z.string().url("Please enter a valid URL"),
    headquartersCountry: z.enum(countryValues),
    fundingStage: z.enum(fundingValues),
    product: z.enum(productValues),
    about: z.enum(aboutValues),
    expectedIntegrationDate: z.date({required_error: "Please select a date"}),
    projectedMonthlyVolume: z.enum(volumeValues),
    currentActiveUsers: z.enum(userValues),
    integrationStack: z.string().min(1, "Share a short description"),
    message: z.string().min(1, "Message is required").max(1000, "Message must be less than 1000 characters"),
});

type FormData = z.infer<typeof formSchema>;

type ValueProp = {
    title: string;
    description: string;
    icon: typeof Shield;
};

const valueProps: ValueProp[] = [
    {
        title: "Agentic compliance",
        description: "Automate KYC/KYB, sanctions, and wallet intelligence with explainable AI decisions.",
        icon: Shield,
    },
    {
        title: "Risk ops autopilot",
        description: "Route escalations to the right reviewer with shared evidence packs and audit-ready logs.",
        icon: LineChart,
    },
    {
        title: "Modular safety stack",
        description: "Blend Monchain APIs with your internal models through a managed orchestration layer.",
        icon: Layers,
    },
    {
        title: "Global reach",
        description: "Serve customers across 190+ jurisdictions with localized policy templates and attestations.",
        icon: Globe,
    },
];

const clientLogos = [
    {name: "Bitcoin.com", src: "/img/clients/bitcoin.jpeg", showTitle: true, rescale: true},
    {name: "Coinbase", src: "/img/clients/coinbase.svg", showTitle: false, rescale: false},
    {name: "Coinmetro", src: "/img/clients/coinmetro.svg", showTitle: true, rescale: true},
    {name: "Trust Wallet", src: "/img/clients/trust-wallet.svg", showTitle: false, rescale: false},
    {name: "Uniswap", src: "/img/clients/uniswap.svg", showTitle: true, rescale: true},
];

const aboutAliasMap: Record<string, string> = {
    compliance: "compliance",
    enterprise: "compliance",
    "risk-ops": "risk-ops",
    "fraud": "risk-ops",
    exchange: "exchange",
    otc: "exchange",
    "wallet-toolkits": "infrastructure",
    infrastructure: "infrastructure",
    investor: "investor",
};

const mapParamToOptionValue = (param: string | null, options: Option[], aliasMap?: Record<string, string>) => {
    if (!param) return undefined;
    const normalized = param.toLowerCase();
    const target = aliasMap?.[normalized] ?? normalized;
    return options.find((option) => option.value.toLowerCase() === target)?.value;
};

const TalkToUs = () => {
    const searchParams = useSearchParams();
    const productParam = searchParams?.get("product") ?? "";
    const aboutParam = searchParams?.get("about") ?? "";
    const {toast} = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const defaultValues = useMemo<FormData>(() => ({
        contactName: "",
        workEmail: "",
        role: "",
        companyName: "",
        companyWebsite: "",
        headquartersCountry: countryOptions.find((option) => option.value === "US")?.value ?? countryOptions[0].value,
        fundingStage: fundingStageOptions[0].value,
        product: mapParamToOptionValue(productParam, productOptions) ?? productOptions[0].value,
        about: mapParamToOptionValue(aboutParam, aboutOptions, aboutAliasMap) ?? aboutOptions[0].value,
        expectedIntegrationDate: new Date(),
        projectedMonthlyVolume: volumeOptions[1].value,
        currentActiveUsers: userBaseOptions[0].value,
        integrationStack: "",
        message: "",
    }), [aboutParam, productParam]);

    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues,
        mode: "onChange",
    });

    useEffect(() => {
        const inferredProduct = mapParamToOptionValue(productParam, productOptions);
        if (inferredProduct && inferredProduct !== form.getValues("product")) {
            form.setValue("product", inferredProduct);
        }
        const inferredAbout = mapParamToOptionValue(aboutParam, aboutOptions, aboutAliasMap);
        if (inferredAbout && inferredAbout !== form.getValues("about")) {
            form.setValue("about", inferredAbout);
        }
    }, [aboutParam, form, productParam]);

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        const enterpriseData = {
            ...data,
            expectedIntegrationDate: data.expectedIntegrationDate.toISOString(),
        };
        const payload = {
            name: data.contactName,
            email: data.workEmail,
            message: data.message.trim(),
            source: "talk-to-us",
            enterpriseData,
        };
        try {
            const response = await fetch(`${getMonchainApiBase()}/p/uss/api/v1/contact`, {
                method: "POST",
                headers: {
                    "x-api-key": getUssApiKey(),
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                const errorPayload = await response.json().catch(() => null);
                const detail = errorPayload?.message ?? "Failed to submit form";
                throw new Error(detail);
            }

            toast({
                title: "Request received",
                description: "Our partnerships team will reach out within one business day.",
            });
            form.reset({...defaultValues, expectedIntegrationDate: new Date()});
        } catch (error) {
            toast({
                title: "Something went wrong",
                description: error instanceof Error ? error.message : "Please try again or email partnerships@colyon.ai",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="pt-24 pb-16">
            <div className="container mx-auto px-6">
                <PageHeader
                    title="Talk to our B2B team"
                    description="Tell us about your compliance, risk, or AI automation requirements and we will design a deployment plan tailored to your Web3 stack."
                />

                <section className="grid lg:grid-cols-[1fr,1.2fr] gap-12 mb-24">
                    <div className="space-y-8 order-2 lg:order-1">
                        <div className="bg-card border border-border rounded-2xl p-8">
                            <p className="text-sm uppercase tracking-[0.2em] text-foreground/60 mb-4">
                                Why teams choose Colyon
                            </p>
                            <div className="space-y-6">
                                {valueProps.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <div key={item.title} className="flex gap-4">
                                            <div
                                                className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                                                <Icon className="w-6 h-6 text-accent"/>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                                                <p className="text-foreground/70 text-sm">{item.description}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div
                            className="bg-gradient-to-br from-mint/10 to-accent/10 border border-accent/20 rounded-2xl p-8">
                            <div className="flex items-center gap-3 mb-4">
                                <Users className="w-8 h-8 text-mint"/>
                                <div>
                                    <p className="text-sm uppercase tracking-[0.2em] text-foreground/60">Dedicated
                                        pods</p>
                                    <h3 className="text-2xl font-semibold">Partner success engineers</h3>
                                </div>
                            </div>
                            <p className="text-foreground/80 text-base">
                                Work with ex-exchange risk leads and ML architects who have shipped agentic guardrails
                                for Fortune 100 fintech. We scope integration plans, KPI dashboards,
                                and control states within your first 10 days.
                            </p>
                        </div>
                        <div className="bg-card border border-border rounded-2xl p-6">
                            <p className="text-sm uppercase tracking-[0.2em] text-foreground/60 mb-4">Join the companies
                                that are transforming web3</p>
                            <div className="flex flex-wrap gap-x-6 gap-y-2 max-w-md">
                                {clientLogos.map((logo) => (
                                    <div
                                        key={logo.name}
                                        className="flex items-center gap-2 text-sm font-medium text-foreground/70 tracking-wide basis-1/2 sm:basis-auto"
                                    >
                                        <Image
                                            src={logo.src}
                                            alt={logo.name}
                                            width={32}
                                            height={32}
                                            className={`${logo.rescale ? 'min-w-2' : 'min-w-28'} h-auto object-contain`}
                                        />
                                        {logo.showTitle && <span className="text-foreground/70">{logo.name}</span>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8 order-1 lg:order-2">
                        <div className="bg-card border border-border rounded-2xl p-6">
                            <p className="text-sm uppercase tracking-[0.2em] text-foreground/60 mb-4">
                                Enterprise intake form
                            </p>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <FormField
                                            control={form.control}
                                            name="contactName"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>Full name</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Jane Doe" {...field}
                                                               disabled={isSubmitting}/>
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="workEmail"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>Work email</FormLabel>
                                                    <FormControl>
                                                        <Input type="email" placeholder="you@company.com" {...field}
                                                               disabled={isSubmitting}/>
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <FormField
                                            control={form.control}
                                            name="companyName"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>Company name</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Orbit Labs" {...field}
                                                               disabled={isSubmitting}/>
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="role"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>Your role</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Head of Compliance" {...field}
                                                               disabled={isSubmitting}/>
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <FormField
                                            control={form.control}
                                            name="companyWebsite"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>Company website</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="https://" {...field}
                                                               disabled={isSubmitting}/>
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="headquartersCountry"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>HQ country</FormLabel>
                                                    <Select onValueChange={field.onChange} value={field.value}
                                                            disabled={isSubmitting}>
                                                        <FormControl>
                                                            <SelectTrigger>
                                                                <SelectValue placeholder="Select country"/>
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent className="max-h-64">
                                                            {countryOptions.map((option) => (
                                                                <SelectItem key={option.value} value={option.value}>
                                                                    {option.label}
                                                                </SelectItem>
                                                            ))}
                                                        </SelectContent>
                                                    </Select>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <FormField
                                            control={form.control}
                                            name="fundingStage"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>Funding stage</FormLabel>
                                                    <Select onValueChange={field.onChange} defaultValue={field.value}
                                                            disabled={isSubmitting}>
                                                        <FormControl>
                                                            <SelectTrigger>
                                                                <SelectValue placeholder="Select stage"/>
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent>
                                                            {fundingStageOptions.map((option) => (
                                                                <SelectItem key={option.value} value={option.value}>
                                                                    {option.label}
                                                                </SelectItem>
                                                            ))}
                                                        </SelectContent>
                                                    </Select>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="product"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>Product focus</FormLabel>
                                                    <Select onValueChange={field.onChange} value={field.value}
                                                            disabled={isSubmitting}>
                                                        <FormControl>
                                                            <SelectTrigger>
                                                                <SelectValue placeholder="Choose a product"/>
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent>
                                                            {productOptions.map((option) => (
                                                                <SelectItem key={option.value} value={option.value}>
                                                                    {option.label}
                                                                </SelectItem>
                                                            ))}
                                                        </SelectContent>
                                                    </Select>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <FormField
                                            control={form.control}
                                            name="about"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>What brings you here?</FormLabel>
                                                    <Select onValueChange={field.onChange} value={field.value}
                                                            disabled={isSubmitting}>
                                                        <FormControl>
                                                            <SelectTrigger>
                                                                <SelectValue placeholder="Select"/>
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent>
                                                            {aboutOptions.map((option) => (
                                                                <SelectItem key={option.value} value={option.value}>
                                                                    {option.label}
                                                                </SelectItem>
                                                            ))}
                                                        </SelectContent>
                                                    </Select>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="expectedIntegrationDate"
                                            render={({field}) => (
                                                <FormItem className="flex flex-col">
                                                    <FormLabel>Expected integration date</FormLabel>
                                                    <Popover>
                                                        <PopoverTrigger asChild>
                                                            <FormControl>
                                                                <Button
                                                                    variant="outline"
                                                                    className={cn(
                                                                        "justify-start text-left font-normal",
                                                                        !field.value && "text-muted-foreground",
                                                                    )}
                                                                    disabled={isSubmitting}
                                                                >
                                                                    {field.value ? format(field.value, "PPP") : "Pick a date"}
                                                                    <CalendarIcon
                                                                        className="ml-auto h-4 w-4 opacity-50"/>
                                                                </Button>
                                                            </FormControl>
                                                        </PopoverTrigger>
                                                        <PopoverContent className="w-auto p-0" align="start">
                                                            <Calendar
                                                                mode="single"
                                                                selected={field.value}
                                                                onSelect={field.onChange}
                                                                disabled={(date) => date < new Date()}
                                                                initialFocus
                                                            />
                                                        </PopoverContent>
                                                    </Popover>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <FormField
                                            control={form.control}
                                            name="projectedMonthlyVolume"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>Projected volume / month</FormLabel>
                                                    <Select onValueChange={field.onChange} value={field.value}
                                                            disabled={isSubmitting}>
                                                        <FormControl>
                                                            <SelectTrigger>
                                                                <SelectValue placeholder="Select"/>
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent>
                                                            {volumeOptions.map((option) => (
                                                                <SelectItem key={option.value} value={option.value}>
                                                                    {option.label}
                                                                </SelectItem>
                                                            ))}
                                                        </SelectContent>
                                                    </Select>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="currentActiveUsers"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>Current active users</FormLabel>
                                                    <Select onValueChange={field.onChange} value={field.value}
                                                            disabled={isSubmitting}>
                                                        <FormControl>
                                                            <SelectTrigger>
                                                                <SelectValue placeholder="Select"/>
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent>
                                                            {userBaseOptions.map((option) => (
                                                                <SelectItem key={option.value} value={option.value}>
                                                                    {option.label}
                                                                </SelectItem>
                                                            ))}
                                                        </SelectContent>
                                                    </Select>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    <FormField
                                        control={form.control}
                                        name="integrationStack"
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel>How is your stack set up today?</FormLabel>
                                                <FormControl>
                                                    <Textarea rows={3}
                                                              placeholder="Chain coverage, data providers, internal models" {...field}
                                                              disabled={isSubmitting}/>
                                                </FormControl>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="message"
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel>Anything else we should know?</FormLabel>
                                                <FormControl>
                                                    <Textarea rows={5}
                                                              placeholder="KPIs, geos, compliance blockers..." {...field}
                                                              disabled={isSubmitting}/>
                                                </FormControl>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />

                                    <Button type="submit" variant="hero" size="lg" className="w-full"
                                            disabled={!form.formState.isValid || isSubmitting}>
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin"/>
                                                Sending details...
                                            </>
                                        ) : (
                                            "Submit"
                                        )}
                                    </Button>
                                </form>
                            </Form>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default TalkToUs;

