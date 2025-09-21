import { useState } from "react";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Briefcase, 
  Users, 
  UserCheck, 
  Calendar,
  MessageSquare,
  Plus,
  Eye,
  TrendingUp,
  Clock,
  MapPin,
  DollarSign
} from "lucide-react";

const EmployerDashboard = () => {
  // Mock data for demo
  const stats = [
    { title: "Jobs Posted", value: "12", icon: <Briefcase className="h-5 w-5" />, trend: "+2 this month" },
    { title: "Applications Received", value: "156", icon: <Users className="h-5 w-5" />, trend: "+23 this week" },
    { title: "Shortlisted Candidates", value: "24", icon: <UserCheck className="h-5 w-5" />, trend: "+8 pending" },
    { title: "Pending Interviews", value: "8", icon: <Calendar className="h-5 w-5" />, trend: "5 this week" }
  ];

  const recentJobs = [
    {
      id: 1,
      title: "Senior React Developer",
      applications: 28,
      status: "Open",
      postedDate: "2024-01-15",
      location: "Remote",
      salary: "$80,000 - $120,000"
    },
    {
      id: 2,
      title: "UI/UX Designer",
      applications: 15,
      status: "Open",
      postedDate: "2024-01-12",
      location: "New York, NY",
      salary: "$60,000 - $90,000"
    },
    {
      id: 3,
      title: "Product Manager",
      applications: 42,
      status: "Closed",
      postedDate: "2024-01-08",
      location: "San Francisco, CA",
      salary: "$100,000 - $140,000"
    }
  ];

  const recentApplications = [
    {
      id: 1,
      candidateName: "Sarah Johnson",
      position: "Senior React Developer",
      appliedDate: "2024-01-16",
      status: "Under Review",
      matchPercentage: 92,
      avatar: "👩‍💻"
    },
    {
      id: 2,
      candidateName: "Mike Chen",
      position: "UI/UX Designer",
      appliedDate: "2024-01-15",
      status: "Shortlisted",
      matchPercentage: 88,
      avatar: "👨‍🎨"
    },
    {
      id: 3,
      candidateName: "Emily Davis",
      position: "Senior React Developer",
      appliedDate: "2024-01-14",
      status: "Interview Scheduled",
      matchPercentage: 95,
      avatar: "👩‍💼"
    }
  ];

  const quickActions = [
    { title: "Post New Job", icon: <Plus className="h-5 w-5" />, href: "/employer/post-job", variant: "professional" as const },
    { title: "Manage Jobs", icon: <Briefcase className="h-5 w-5" />, href: "/employer/jobs", variant: "outline" as const },
    { title: "View Applications", icon: <Users className="h-5 w-5" />, href: "/employer/applications", variant: "outline" as const },
    { title: "Schedule Interviews", icon: <Calendar className="h-5 w-5" />, href: "/employer/interviews", variant: "outline" as const }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header isAuthenticated={true} userType="employer" />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Employer Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's an overview of your hiring activities.</p>
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
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  variant={action.variant}
                  className="h-auto p-4 flex flex-col space-y-2"
                >
                  {action.icon}
                  <span className="text-sm font-medium">{action.title}</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Jobs */}
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Briefcase className="h-5 w-5" />
                  <span>Recent Jobs</span>
                </div>
                <Button variant="ghost" size="sm">
                  View All
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentJobs.map((job) => (
                <div key={job.id} className="p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-foreground">{job.title}</h4>
                    <Badge variant={job.status === 'Open' ? 'default' : 'secondary'}>
                      {job.status}
                    </Badge>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{job.applications} applications</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>Posted {job.postedDate}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <DollarSign className="h-4 w-4" />
                        <span>{job.salary}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2 mt-3">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recent Applications */}
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>Recent Applications</span>
                </div>
                <Button variant="ghost" size="sm">
                  View All
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentApplications.map((application) => (
                <div key={application.id} className="p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">{application.avatar}</div>
                      <div>
                        <h4 className="font-semibold text-foreground">{application.candidateName}</h4>
                        <p className="text-sm text-muted-foreground">{application.position}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-accent-success mb-1">
                        {application.matchPercentage}% match
                      </div>
                      <Badge variant="secondary">
                        {application.status}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <p className="text-sm text-muted-foreground">
                      Applied on {application.appliedDate}
                    </p>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        View Profile
                      </Button>
                      <Button variant="ghost" size="sm">
                        <MessageSquare className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EmployerDashboard;