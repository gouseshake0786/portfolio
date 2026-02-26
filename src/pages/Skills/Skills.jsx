import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "@/components/globe";
import { Code2, Database, Layout, Cpu, Cloud } from "lucide-react";
import { FaAngular, FaAws, FaGitAlt, FaLinux } from "react-icons/fa";
import { SiJenkins, SiPostman } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { BsFileEarmarkCode, BsGrid1X2 } from "react-icons/bs";
import { FcWorkflow } from "react-icons/fc";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          {title}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
          >
            {skill.icon}
            <span className="font-medium">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      color: "text-blue-400",
      skills: [
        { name: "Angular", icon: <FaAngular className="w-4 h-4 text-[#DD0031]" /> },
        { name: "JavaScript", icon: <BsFileEarmarkCode className="w-4 h-4 text-yellow-400" /> },
        { name: "HTML5", icon: <BsFileEarmarkCode className="w-4 h-4 text-[#E34F26]" /> },
        { name: "CSS3", icon: <BsFileEarmarkCode className="w-4 h-4 text-[#1572B6]" /> },
        { name: "REST API Integration", icon: <BsGrid1X2 className="w-4 h-4 text-orange-400" /> },
      ],
    },
    {
      icon: Database,
      title: "Backend Development",
      color: "text-green-400",
      skills: [
        { name: "C#", icon: <BsFileEarmarkCode className="w-4 h-4 text-purple-400" /> },
        { name: ".NET Core", icon: <BsFileEarmarkCode className="w-4 h-4 text-indigo-400" /> },
        { name: "ASP.NET MVC", icon: <BsFileEarmarkCode className="w-4 h-4 text-blue-400" /> },
        { name: "Web API", icon: <BsGrid1X2 className="w-4 h-4 text-orange-500" /> },
        { name: "REST APIs", icon: <BsGrid1X2 className="w-4 h-4 text-orange-400" /> },
        { name: "Microservices", icon: <Cpu className="w-4 h-4 text-green-500" /> },
        { name: "SQL Server", icon: <Database className="w-4 h-4 text-red-400" /> },
        { name: "Java", icon: <BsFileEarmarkCode className="w-4 h-4 text-red-500" /> },
        { name: "Bot Framework", icon: <Cpu className="w-4 h-4 text-blue-500" /> },
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      color: "text-orange-400",
      skills: [
        { name: "Azure", icon: <Cloud className="w-4 h-4 text-blue-400" /> },
        { name: "AWS (EKS)", icon: <FaAws className="w-4 h-4 text-[#FF9900]" /> },
        { name: "Azure DevOps", icon: <Cloud className="w-4 h-4 text-blue-500" /> },
        { name: "CI/CD", icon: <FcWorkflow className="w-4 h-4" /> },
        { name: "Jenkins", icon: <SiJenkins className="w-4 h-4 text-red-500" /> },
        { name: "Git", icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" /> },
        { name: "Linux", icon: <FaLinux className="w-4 h-4 text-[#FCC624]" /> },
      ],
    },
    {
      icon: Cpu,
      title: "Tools & Technologies",
      color: "text-pink-400",
      skills: [
        { name: "Postman", icon: <SiPostman className="w-4 h-4 text-orange-500" /> },
        { name: "VS Code", icon: <TbBrandVscode className="w-4 h-4 text-[#007ACC]" /> },
        { name: "Datadog", icon: <Cpu className="w-4 h-4 text-purple-400" /> },
        { name: "Azure Cognitive Services", icon: <Cloud className="w-4 h-4 text-blue-500" /> },
        { name: "LUIS", icon: <Cpu className="w-4 h-4 text-indigo-400" /> },
        { name: "QnA Maker", icon: <Cpu className="w-4 h-4 text-teal-400" /> },
      ],
    },
  ];

  return (
    <main className="pt-15 lg:pt-0 text-white min-h-screen bg-[#04081A] relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

      <section className="container mx-auto px-4 py-11 relative z-10">
        <div className="flex justify-center items-center">
          <IconCloudDemo />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </section>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            );
          background-size: 30px 30px;
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;