import {Toaster} from "@/components/ui/toaster";
import {Toaster as Sonner} from "@/components/ui/sonner";
import {TooltipProvider} from "@/components/ui/tooltip";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "@/store/store";
import Layout from "@/components/Layout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Research from "./pages/Research";
import Safety from "./pages/Safety";
import XAI from "./pages/XAI";
import Monchain from "./pages/Monchain";
import AboutUs from "./pages/AboutUs";
import Mission from "./pages/Mission";
import Careers from "./pages/Careers";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import ContactUs from "./pages/ContactUs";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const queryClient = new QueryClient();

const App = () => (
    <Provider store={store}>
        <QueryClientProvider client={queryClient}>
            <TooltipProvider>
                <Toaster/>
                <Sonner/>
                <BrowserRouter>
                    <Routes>
                        <Route element={<Layout/>}>
                            <Route path="/" element={<Index/>}/>
                            <Route path="/research" element={<Research/>}/>
                            <Route path="/safety" element={<Safety/>}/>
                            <Route path="/xai" element={<XAI/>}/>
                            <Route path="/products/monchain" element={<Monchain/>}/>
                            <Route path="/about" element={<AboutUs/>}/>
                            <Route path="/mission" element={<Mission/>}/>
                            <Route path="/careers" element={<Careers/>}/>
                            <Route path="/news" element={<News/>}/>
                            <Route path="/news/:id" element={<NewsDetail/>}/>
                            <Route path="/contact" element={<ContactUs/>}/>
                            <Route path="/terms" element={<TermsOfService/>}/>
                            <Route path="/privacy" element={<PrivacyPolicy/>}/>
                        </Route>
                        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                </BrowserRouter>
            </TooltipProvider>
        </QueryClientProvider>
    </Provider>
);

export default App;
