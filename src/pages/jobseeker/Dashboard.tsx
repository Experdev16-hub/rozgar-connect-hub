import { useState } from "react";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Bookmark, 
  FileText, 
  Calendar,
  MessageSquare,
  User,
  TrendingUp,
  Clock,
  MapPin,
  DollarSign,
  Building,
  Star
} from "lucide-react";

const JobSeekerDashboard = () => {
  // Mock data for demo
  const stats = [
    { title: "Applications Sent", value: "18", icon: <FileText className="h-5 w-5" />, trend: "+3 this week" },
    { title: "Saved Jobs", value: "24", icon: <Bookmark className="h-5 w-5" />, trend: "+5 new matches" },
    { title: "Interview Invitations", value: "4", icon: <Calendar className="h-5 w-5" />, trend: "2 upcoming" },
    { title: "Profile Views", value: "127", icon: <User className="h-5 w-5" />, trend: "+15 this week" }
  ];

  const recommendedJobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      location: "Remote",
      salary: "$90,000 - $130,000",
      type: "Full-time",
      postedDate: "2 days ago",
      matchPercentage: 95,
      skills: ["React", "TypeScript", "Node.js"],
      logo: "🏢"
    },
    {
      id: 2,
      title: "UI/UX Designer",
      company: "Design Studio",
      location: "New York, NY",
      salary: "$70,000 - $100,000",
      type: "Full-time",
      postedDate: "1 day ago",
      matchPercentage: 88,
      skills: ["Figma", "Sketch", "Adobe Creative Suite"],
      logo: "🎨"
    },
    {
      id: 3,
      title: "Full Stack Developer",
      company: "StartupXYZ",
      location: "San Francisco, CA",
      salary: "$80,000 - $120,000",
      type: "Contract",
      postedDate: "3 days ago",
      matchPercentage: 92,
      skills: ["React", "Python", "AWS"],
      logo: "🚀"
    }
  ];

  const recentApplications = [
    {
      id: 1,
      jobTitle: "Senior React Developer",
      company: "TechCorp Inc.",
      appliedDate: "2024-01-16",
      status: "Under Review",
      logo: "🏢"
    },
    {
      id: 2,
      jobTitle: "Frontend Engineer",
      company: "Innovation Labs",
      appliedDate: "2024-01-14",
      status: "Shortlisted",
      logo: "⚡"
    },
    {
      id: 3,
      jobTitle: "JavaScript Developer",
      company: "WebSolutions",
      appliedDate: "2024-01-12",
      status: "Interview Scheduled",
      logo: "💻"
    }
  ];

  const upcomingInterviews = [
    {
      id: 1,
      jobTitle: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      date: "2024-01-20",
      time: "10:00 AM",
      type: "Video Call",
      interviewer: "John Smith"
    },
    {
      id: 2,
      jobTitle: "UI/UX Designer",
      company: "Design Studio",
      date: "2024-01-22",
      time: "2:00 PM",
      type: "In Person",
      interviewer: "Sarah Johnson"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Under Review':
        return 'secondary';
      case 'Shortlisted':
        return 'default';
      case 'Interview Scheduled':
        return 'secondary';
      default:
        return 'secondary';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header isAuthenticated={true} userType="jobseeker" />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome Back!</h1>
          <p className="text-muted-foreground">Here's your job search progress and new opportunities waiting for you.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="card-elevated">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs text-accent-success mt-1">{stat.trend}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-accent-corporate text-primary">
                    {stat.icon}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <Card className="card-elevated mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5" />
              <span>Quick Actions</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Button variant="professional" className="h-auto p-4 flex flex-col space-y-2">
                <Search className="h-5 w-5" />
                <span className="text-sm font-medium">Browse Jobs</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col space-y-2">
                <User className="h-5 w-5" />
                <span className="text-sm font-medium">Update Profile</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col space-y-2">
                <FileText className="h-5 w-5" />
                <span className="text-sm font-medium">View Applications</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col space-y-2">
                <MessageSquare className="h-5 w-5" />
                <span className="text-sm font-medium">Messages</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recommended Jobs */}
          <div className="lg:col-span-2">
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Star className="h-5 w-5" />
                    <span>Recommended Jobs</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    View All
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {recommendedJobs.map((job) => (
                  <div key={job.id} className="p-6 border border-border rounded-lg hover:bg-accent/50 transition-colors">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-4">
                        <div className="text-3xl">{job.logo}</div>
                        <div>
                          <h4 className="font-semibold text-foreground text-lg mb-1">{job.title}</h4>
                          <div className="flex items-center space-x-2 text-muted-foreground mb-2">
                            <Building className="h-4 w-4" />
                            <span>{job.company}</span>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-4 w-4" />
                              <span>{job.location}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <DollarSign className="h-4 w-4" />
                              <span>{job.salary}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="h-4 w-4" />
                              <span>{job.postedDate}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-accent-success mb-2">
                          {job.matchPercentage}% match
                        </div>
                        <Badge variant="secondary">
                          {job.type}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex space-x-3">
                      <Button variant="professional" size="sm">
                        Apply Now
                      </Button>
                      <Button variant="outline" size="sm">
                        <Bookmark className="h-4 w-4 mr-1" />
                        Save
                      </Button>
                      <Button variant="ghost" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {/* Recent Applications */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-5 w-5" />
                  <span>Recent Applications</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentApplications.map((application) => (
                  <div key={application.id} className="p-3 border border-border rounded-lg">
                    <div className="flex items-start space-x-3">
                      <div className="text-xl">{application.logo}</div>
                      <div className="flex-1">
                        <h5 className="font-medium text-foreground text-sm mb-1">
                          {application.jobTitle}
                        </h5>
                        <p className="text-xs text-muted-foreground mb-2">
                          {application.company}
                        </p>
                        <div className="flex items-center justify-between">
                          <p className="text-xs text-muted-foreground">
                            Applied {application.appliedDate}
                          </p>
                          <Badge variant={getStatusColor(application.status)} className="text-xs">
                            {application.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <Button variant="outline" size="sm" className="w-full">
                  View All Applications
                </Button>
              </CardContent>
            </Card>

            {/* Upcoming Interviews */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>Upcoming Interviews</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingInterviews.map((interview) => (
                  <div key={interview.id} className="p-4 border border-border rounded-lg bg-accent-corporate/50">
                    <h5 className="font-medium text-foreground text-sm mb-1">
                      {interview.jobTitle}
                    </h5>
                    <p className="text-xs text-muted-foreground mb-3">
                      {interview.company}
                    </p>
                    <div className="space-y-2 text-xs text-muted-foreground">
                      <div className="flex items-center justify-between">
                        <span>Date:</span>
                        <span className="font-medium">{interview.date}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Time:</span>
                        <span className="font-medium">{interview.time}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Type:</span>
                        <span className="font-medium">{interview.type}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Interviewer:</span>
                        <span className="font-medium">{interview.interviewer}</span>
                      </div>
                    </div>
                    <div className="flex space-x-2 mt-3">
                      <Button variant="professional" size="sm" className="flex-1">
                        Accept
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        Reschedule
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSeekerDashboard;