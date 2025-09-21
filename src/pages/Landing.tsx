import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-image.jpg";
import { 
  Briefcase, 
  Users, 
  Search, 
  MessageSquare, 
  Calendar,
  Shield,
  TrendingUp,
  Award,
  Star,
  ArrowRight,
  CheckCircle,
  Building,
  UserCheck
} from "lucide-react";

const Landing = () => {
  const features = [
    {
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      title: "Post Jobs Easily",
      description: "Create detailed job postings with our intuitive interface and reach thousands of qualified candidates."
    },
    {
      icon: <Search className="h-8 w-8 text-primary" />,
      title: "Smart Job Matching",
      description: "Our AI-powered system matches job seekers with relevant opportunities based on skills and experience."
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      title: "Direct Messaging",
      description: "Connect directly with employers and candidates through our built-in messaging system."
    },
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      title: "Easy Scheduling",
      description: "Schedule interviews seamlessly with integrated calendar and notification features."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Secure Platform",
      description: "Your data is protected with enterprise-grade security and privacy measures."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Career Growth",
      description: "Access resources and insights to accelerate your career development and success."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "HR Director",
      company: "TechCorp Inc.",
      avatar: "👩‍💼",
      content: "RozgarInfo helped us find exceptional talent quickly. The platform's matching algorithm is incredibly accurate."
    },
    {
      name: "Mike Chen",
      role: "Software Developer",
      company: "Freelancer",
      avatar: "👨‍💻",
      content: "I found my dream job within 2 weeks! The interview scheduling feature made the process so smooth."
    },
    {
      name: "Emily Davis",
      role: "Recruiter",
      company: "Global Solutions",
      avatar: "👩‍🎓",
      content: "The best job portal I've used. Great candidates, easy posting process, and excellent communication tools."
    }
  ];

  const stats = [
    { number: "50K+", label: "Active Jobs" },
    { number: "100K+", label: "Job Seekers" },
    { number: "25K+", label: "Companies" },
    { number: "95%", label: "Success Rate" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Professional team collaborating in modern office" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              🚀 Connecting Talent with Opportunity
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Find Your Perfect
              <span className="gradient-hero bg-clip-text text-transparent"> Career Match</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Whether you're an employer seeking top talent or a job seeker looking for your next opportunity, 
              RozgarInfo connects you with the perfect match.
            </p>
            
            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link to="/signup?type=employer" className="w-full sm:w-auto">
                <Button variant="hero" size="lg" className="w-full sm:w-auto group">
                  <Building className="mr-2 h-5 w-5" />
                  I'm an Employer
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/signup?type=jobseeker" className="w-full sm:w-auto">
                <Button variant="corporate" size="lg" className="w-full sm:w-auto group">
                  <UserCheck className="mr-2 h-5 w-5" />
                  I'm a Job Seeker
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose RozgarInfo?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive platform offers everything you need for successful job searching and hiring.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-elevated hover:shadow-[var(--shadow-elevated)] transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="p-3 rounded-lg bg-accent-corporate group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get started in three simple steps and connect with your perfect match.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* For Employers */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-foreground text-center mb-8">
                For Employers
              </h3>
              <div className="space-y-6">
                {[
                  { step: "1", title: "Create Account", desc: "Sign up and set up your company profile" },
                  { step: "2", title: "Post Jobs", desc: "Create detailed job postings with requirements" },
                  { step: "3", title: "Review & Hire", desc: "Review applications and connect with candidates" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full gradient-hero flex items-center justify-center text-white font-semibold">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* For Job Seekers */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-foreground text-center mb-8">
                For Job Seekers
              </h3>
              <div className="space-y-6">
                {[
                  { step: "1", title: "Build Profile", desc: "Create your profile and upload your resume" },
                  { step: "2", title: "Search Jobs", desc: "Browse and apply to relevant job opportunities" },
                  { step: "3", title: "Get Hired", desc: "Interview with employers and land your dream job" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-corporate text-primary flex items-center justify-center font-semibold">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Users Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of satisfied employers and job seekers who found success with RozgarInfo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-elevated">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{testimonial.avatar}</div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join RozgarInfo today and take the next step in your career journey or find the perfect candidate for your team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button variant="hero" size="lg" className="w-full sm:w-auto">
                  Get Started Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;