"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Copy } from "lucide-react";
import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";

const formatTechStack = (tech: string) => {
  const techMap: Record<string, string> = {
    react: "React.js",
    node: "Node.js",
    python: "Python",
    javascript: "JavaScript",
    typescript: "TypeScript",
    java: "Java",
    csharp: "C#",
    ruby: "Ruby",
    php: "PHP",
    html: "HTML",
    css: "CSS",
    sql: "SQL",
    mongo: "MongoDB",
    mysql: "MySQL",
    postgres: "PostgreSQL",
    git: "Git",
    docker: "Docker",
    aws: "AWS",
    azure: "Azure",
    googlecloud: "Google Cloud",
    tensorflow: "TensorFlow",
    machinelearning: "Machine Learning",
    ai: "AI",
    dataanalysis: "Data Analysis",
    bigdata: "Big Data",
    devops: "DevOps",
    agile: "Agile",
    scrum: "Scrum",
    kubernetes: "Kubernetes",
    graphql: "GraphQL",
    vue: "Vue.js",
    angular: "Angular",
    flutter: "Flutter",
    swift: "Swift",
    rubyrails: "Ruby on Rails",
    nextjs: "Next.js",
    vuejs: "Vue.js",
    spring: "Spring",
    laravel: "Laravel",
  };

  return tech
    .split(",")
    .map((tech) => tech.trim().toLowerCase())
    .map(
      (tech) => techMap[tech] || tech.charAt(0).toUpperCase() + tech.slice(1)
    )
    .join(", ");
};

export default function LinkedInHeadlineGenerator() {
  const [interest, setInterest] = useState("");
  const [techStack, setTechStack] = useState("");
  const [study, setStudy] = useState("");
  const [generatedHeadlines, setGeneratedHeadlines] = useState<string[]>([]);

  // Function to generate multiple taglines dynamically
  const generateHeadlines = () => {
    if (!interest) {
      setGeneratedHeadlines([
        "Please enter your interest to generate taglines.",
      ]);
      return;
    }

    const formattedTechStack = formatTechStack(techStack);
    const studyText = study ? study : "Passionate Learner";

    const headlines = [
      `Innovative ${interest} Specialist | Expert in ${
        formattedTechStack || "Cutting-Edge Technologies"
      } | ${studyText}`,
      `Creative ${interest} Enthusiast | Skilled in ${
        formattedTechStack || "Top-Tier Technologies"
      } | ${studyText}`,
      `Results-Driven ${interest} Professional | Proficient with ${
        formattedTechStack || "Advanced Technologies"
      } | ${studyText}`,
      `Dynamic ${interest} Leader | Experienced in ${
        formattedTechStack || "Modern Tech Stacks"
      } | ${studyText}`,
      `Strategic ${interest} Expert | Knowledgeable in ${
        formattedTechStack || "Emerging Technologies"
      } | ${studyText}`,
    ];

    setGeneratedHeadlines(headlines);
  };

  const copyToClipboard = (headline: string) => {
    navigator.clipboard.writeText(headline);
    alert("Headline copied to the clipboard.");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-teal-50 to-cyan-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="max-w-2xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-teal-400 to-cyan-400 p-6">
              <CardTitle className="text-3xl font-bold text-white text-center">
                LinkedIn Headline Generator
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="interest" className="text-gray-700">
                    Interest
                  </Label>
                  <Input
                    id="interest"
                    placeholder="e.g. Web Development"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="mt-1 border-gray-300 focus:border-teal-500 focus:ring focus:ring-teal-200 focus:ring-opacity-50"
                  />
                </div>

                <div>
                  <Label htmlFor="techStack" className="text-gray-700">
                    Tech Stack (optional)
                  </Label>
                  <Input
                    id="techStack"
                    placeholder="e.g. React, Node.js, Python"
                    value={techStack}
                    onChange={(e) => setTechStack(e.target.value)}
                    className="mt-1 border-gray-300 focus:border-teal-500 focus:ring focus:ring-teal-200 focus:ring-opacity-50"
                  />
                </div>

                <div>
                  <Label htmlFor="study" className="text-gray-700">
                    Study (optional)
                  </Label>
                  <Input
                    id="study"
                    placeholder="e.g. Computer Science Graduate"
                    value={study}
                    onChange={(e) => setStudy(e.target.value)}
                    className="mt-1 border-gray-300 focus:border-teal-500 focus:ring focus:ring-teal-200 focus:ring-opacity-50"
                  />
                </div>

                <Button
                  onClick={generateHeadlines}
                  className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
                >
                  Generate Headlines
                </Button>
              </div>

              {generatedHeadlines.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="bg-teal-50 p-4 rounded-lg shadow-md"
                >
                  <h3 className="text-lg font-bold text-teal-700">
                    Your Generated Headlines
                  </h3>
                  <ul className="mt-2 space-y-2">
                    {generatedHeadlines.map((headline, index) => (
                      <li key={index} className="text-gray-800">
                        <p>{headline}</p>
                        <Button
                          variant="outline"
                          className="mt-2 flex items-center"
                          onClick={() => copyToClipboard(headline)}
                        >
                          <Copy className="mr-2" />
                          Copy to Clipboard
                        </Button>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
