import { SkillCardProps } from "@/components/SkillsCard";

export const languages: SkillCardProps[] = [
  {
    title: "Javascript",
    description:
      "This is a general purpose programming language. I mainly tend not not use it directly in my project since I prefer to use typescript for its type safety.",
    Proficiency: "Highly proficient",
  },
  {
    title: "Typescript",
    description:
      "Typescript is a typed superset of JavaScript that compiles to plain JavaScript. I started using typescript in 2021 while developing servers with Nodejs and expressjs. Java background influence I guess",
    Proficiency: "Highly proficient",
  },
  {
    title: "Python",
    description:
      "Like Javascript, Python is a general purpose language. Although I would prefer to use it for niche applications like machine learning and data analysis.",
    Proficiency: "Highly Proficient",
  },
  {
    title: "Java",
    description:
      "The Java language is only second to C in my all time favorites, very similar to C# used in developing dotnet applications, it is a strongly typed language but it has a high overhead. I used it as my first language for Android projects and it was the language I used to learn programming",
    Proficiency: "Proficiency but not regularly used.",
  },
  {
    title: "C",
    description:
      "The C programming language is my favorite programming language. I used it for developing linux applications and some low level servers. These were hobby projects though. Then my favourite thing to do with it is develop arduino applications.",
    Proficiency: "Well first but need brushing up",
  },
];

export const TechnicalSkills: SkillCardProps[] = [
  {
    title: "React and its supersets",
    description:
      "React is a JavaScript library for building a more dynamic and responsive user interfaces. It was initially developed for web applications but now we have use cases such as React native for mobile and I think there are libraries out there that allow you to create native windows applications.",

    Proficiency: "Highly proficient",
  },
  {
    title: "Django",
    description:
      "Django is a python library that is used to develop fullstack web applications. It supports many database but mainly the relational SQL databases like PostgreSQL and MySQL. You can easily connect to the database with django models or use some other ways. You can develop purely backend applications with django rest frameworks and provide apis for people to use in their frontend applications",
    Proficiency: "Highly proficient",
  },
  {
    title: "Vuejs",
    description:
      "Vuejs is a frontend ui framework. I have used it on a couple of projects but I wouldn't say I am now a pro at it. If however I was to spend another week on the documentations, then I would be almost as good at it as I am at react.",
    Proficiency: "Used occasionally",
  },
  {
    title: "Nodejs",
    description:
      "Nodejs is a JavaScript runtime environment that runs on the server side. It is used to develop server side applications. This is my go to for building most application programming interfaces, since I prefer providing API endpoints fron my server that frontend clients can consume.",
    Proficiency: "Used regularly",
  },
  {
    title: "Android Development",
    description:
      "Using java in android studio, this was the first time I actually did proper programming. Now I also develop using React Native and I think thats why I have not brought myself to learn Kotlin but I could get the gist of it in as little time as one week.",
    Proficiency: "Long time without using.",
  },
];
