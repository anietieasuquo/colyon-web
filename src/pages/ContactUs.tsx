import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {useToast} from "@/hooks/use-toast";
import {Loader2, Mail, MapPin, Phone} from "lucide-react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import * as z from "zod";
import {useState} from "react";
import PageHeader from "@/components/PageHeader";
import {getMonchainApiBase, getUssApiKey} from "@/lib/config.ts";

const formSchema = z.object({
    name: z.string().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
    email: z.string().email("Please enter a valid email address"),
    message: z.string().min(1, "Message is required").max(1000, "Message must be less than 1000 characters"),
});

type FormData = z.infer<typeof formSchema>;

const ContactUs = () => {
    const {toast} = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        try {
            const MONCHAIN_API_BASE_URL = getMonchainApiBase();
            const USS_API_KEY = getUssApiKey();
            const response = await fetch(`${MONCHAIN_API_BASE_URL}/p/uss/api/v1/contact`, {
                method: "POST",
                headers: {
                    "x-api-key": USS_API_KEY,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error("Failed to send message");
            }

            const result = await response.json();

            toast({
                title: "Message sent!",
                description: "We'll get back to you as soon as possible.",
            });

            form.reset();
        } catch (error) {
            toast({
                title: "Error",
                description: "Failed to send message. Please try again.",
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
                    title="Get in Touch"
                    description="Have a question or want to learn more? We'd love to hear from you."
                />

                {/* Contact Info */}
                <div className="max-w-5xl mx-auto mb-20">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-card border border-border rounded-lg p-8 text-center animate-fade-in">
                            <Mail className="w-12 h-12 text-accent mx-auto mb-4"/>
                            <h3 className="text-xl font-semibold mb-3">Email Us</h3>
                            <a href="mailto:hello@colyon.ai"
                               className="text-foreground/70 hover:text-accent transition-colors">
                                hello@colyon.ai
                            </a>
                        </div>

                        <div className="bg-card border border-border rounded-lg p-8 text-center animate-fade-in"
                             style={{animationDelay: "0.1s"}}>
                            <MapPin className="w-12 h-12 text-mint mx-auto mb-4"/>
                            <h3 className="text-xl font-semibold mb-3">Location</h3>
                            <p className="text-foreground/70">
                                London, United Kingdom
                            </p>
                        </div>

                        <div className="bg-card border border-border rounded-lg p-8 text-center animate-fade-in"
                             style={{animationDelay: "0.2s"}}>
                            <Phone className="w-12 h-12 text-accent mx-auto mb-4"/>
                            <h3 className="text-xl font-semibold mb-3">Phone</h3>
                            <a href="tel:+447506724690"
                               className="text-foreground/70 hover:text-accent transition-colors">
                                +447506724690
                            </a>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="max-w-2xl mx-auto">
                    <div className="bg-card border border-border rounded-lg p-8">
                        <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Name</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Your name"
                                                    {...field}
                                                    disabled={isSubmitting}
                                                />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="email"
                                                    placeholder="your@email.com"
                                                    {...field}
                                                    disabled={isSubmitting}
                                                />
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
                                            <FormLabel>Message</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    rows={6}
                                                    placeholder="Tell us more..."
                                                    {...field}
                                                    disabled={isSubmitting}
                                                />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />

                                <Button
                                    type="submit"
                                    variant="hero"
                                    size="lg"
                                    className="w-full"
                                    disabled={!form.formState.isValid || isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin"/>
                                            Sending...
                                        </>
                                    ) : (
                                        "Send Message"
                                    )}
                                </Button>
                            </form>
                        </Form>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ContactUs;
