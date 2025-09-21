import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  Users, 
  TrendingUp, 
  Award,
  Heart,
  Globe,
  Shield,
  Zap
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Mission-Driven",
      description: "We're committed to connecting the right talent with the right opportunities, creating meaningful career paths."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "People-First",
      description: "Every decision we make puts our users first - whether they're job seekers or employers looking for talent."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Trust & Security",
      description: "We maintain the highest standards of data protection and privacy for all our users."
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Innovation",
      description: "We continuously improve our platform with cutting-edge technology and user-centered design."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Co-Founder",
      bio: "Former HR executive with 15+ years in talent acquisition and workforce development.",
      avatar: "👩‍💼"
    },
    {
      name: "Mike Chen",
      role: "CTO & Co-Founder",
      bio: "Tech veteran who's built scalable platforms for millions of users across multiple industries.",
      avatar: "👨‍💻"
    },
    {
      name: "Emily Davis",
      role: "Head of Product",
      bio: "Product strategist focused on creating intuitive experiences that solve real user problems.",
      avatar: "👩‍🎓"
    },
    {
      name: "David Wilson",
      role: "Head of Engineering",
      bio: "Engineering leader passionate about building robust, secure, and scalable systems.",
      avatar: "👨‍🔧"
    }
  ];

  const stats = [
    { number: "50K+", label: "Active Jobs", icon: <TrendingUp className="h-5 w-5" /> },
    { number: "100K+", label: "Job Seekers", icon: <Users className="h-5 w-5" /> },
    { number: "25K+", label: "Companies", icon: <Globe className="h-5 w-5" /> },
    { number: "95%", label: "Success Rate", icon: <Award className="h-5 w-5" /> }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 gradient-subtle opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              About RozgarInfo
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Connecting Talent with
              <span className="gradient-hero bg-clip-text text-transparent"> Opportunity</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              RozgarInfo was founded with a simple yet powerful vision: to create a platform where talented 
              individuals can find meaningful work and companies can discover exceptional people who will drive their success.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <Card key={index} className="card-elevated text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-3">
                    <div className="p-3 rounded-lg bg-accent-corporate text-primary">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
              <p>
                RozgarInfo was founded in 2020 by a team of HR professionals and technologists who 
                experienced firsthand the challenges of traditional job searching and hiring processes. 
                We saw talented individuals struggling to find opportunities that matched their skills, 
                while companies spent months searching for the right candidates.  
              </p>
              <p>
                Our platform leverages advanced matching algorithms, intuitive design, and comprehensive 
                communication tools to bridge this gap. We believe that when the right person meets the 
                right opportunity, amazing things happen - for individuals, companies, and society as a whole.
              </p>
              <p>
                Today, RozgarInfo serves thousands of job seekers and employers across various industries, 
                from startups to Fortune 500 companies. We're proud to have facilitated countless successful 
                career moves and helped build teams that drive innovation and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core values guide every decision we make and every feature we build.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="card-elevated hover:shadow-[var(--shadow-elevated)] transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-accent-corporate flex-shrink-0">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The passionate people behind RozgarInfo who are dedicated to transforming how people find work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="card-elevated text-center">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">{member.avatar}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
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
              Ready to Join Our Community?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you're looking for your next career opportunity or seeking exceptional talent, 
              RozgarInfo is here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/signup" 
                className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-4 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Get Started Today
              </a>
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-4 text-base font-semibold hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;