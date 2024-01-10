"use client";

import { Dispatch, SetStateAction } from "react";
import Logo from "./Logo";
import SidebarItem from "./SidebarItem";

interface Props {
    courses: string[];
    courseFilter: string;
    onCourseFilterChange: Dispatch<SetStateAction<string>>;
}

const Sidebar = ({ courses, courseFilter, onCourseFilterChange }: Props) => {
    return (
        <div className="min-h-screen w-60 flex-none border-r-2 border-gray-300 bg-gray-100">
            <Logo />
            <nav className="mt-10 grid justify-center gap-4">
                <SidebarItem
                    title="Kaikki Tehtävät"
                    courseFilter={courseFilter}
                    onCourseFilterChange={onCourseFilterChange}
                />
                {courses.map((course, index) => {
                    return (
                        <SidebarItem
                            key={index}
                            title={course}
                            courseFilter={courseFilter}
                            onCourseFilterChange={onCourseFilterChange}
                        />
                    );
                })}
            </nav>
        </div>
    );
};

export default Sidebar;
