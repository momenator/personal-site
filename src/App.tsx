import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Images from "./pages/Images";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import ScrollFade from "./components/ScrollFade";
import { useDynamicHighlight } from "./hooks/useDynamicHighlight";

const queryClient = new QueryClient();

const AppContent = () => {
  useDynamicHighlight();
  
  return (
    <>
      <Navbar />
      <ScrollFade>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/images" element={<Images />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ScrollFade>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
