"use client";

import ConfirmChapters from "@/components/confirm-chapter";
import { useAuth } from "@clerk/nextjs";
import { Info } from "lucide-react";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Chapter, Course, Unit } from "@prisma/client";

type Props = {
  params: {
    courseId: string;
  };
};

type CourceType = {
  course: Course & {
    units: (Unit & {
      chapters: Chapter[];
    })[];
  };
};

const CreateChapters = ({ params: { courseId } }: Props) => {
  const [course, setNotes] = React.useState<CourceType["course"]>();

  const getCourses = useMutation({
    mutationFn: async () => {
      const response = await axios.get(`/api/courses/${courseId}`);
      return response.data;
    },
  });

  useEffect(() => {
    getCourses.mutate(undefined, {
      onSuccess: (data) => {
        setNotes(data);
        console.log(data);
      },
      onError: (error) => {
        console.log(`There is an error while getting courses ${error}`);
      },
    });
  }, []);

  const { userId } = useAuth();
  if (!userId) return redirect("/gallery");

  return (
    <div className="flex flex-col items-start max-w-xl mx-auto my-16">
      <h5 className="text-sm uppercase text-seconday-foreground/60">
        Course Name
      </h5>
    {course && <h1 className="text-5xl font-bold">{course.name}</h1>}

      <div className="flex p-4 mt-5 border-none bg-secondary">
        <Info className="w-12 h-12 mr-3 text-blue-400" />
        <div>
          We generated chapters for each of your units. Look over them and then
          click the Button to confirm and continue
        </div>
      </div>
      
      {course && <ConfirmChapters course={course} />}
    </div>
  );
};

export default CreateChapters;
