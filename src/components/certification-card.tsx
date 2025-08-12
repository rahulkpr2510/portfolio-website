"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface CertificationCardProps {
  title: string;
  certificationUrl: string;
  description?: string;
  date: string;
}
export const CertificationCard = ({
  title,
  certificationUrl,
  description,
  date,
}: CertificationCardProps) => {
  const handleClick = (e: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => {
    if (description) {
      e.preventDefault();
    }
  };

  return (
    <Card className="flex">
      <div className="flex-grow ml-4 items-center flex-col group">
        <Link href={certificationUrl} className="inline cursor-pointer">
          <CardHeader>
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3
                onClick={handleClick}
                className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm"
              >
                {title}

                <ChevronRightIcon
                  className={cn(
                    "size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100"
                  )}
                />
              </h3>
              <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                {date}
              </div>
            </div>
            <CardContent>
              <div className="text-xs sm:text-sm tabular-nums text-muted-foreground">
                Issued By: {description}
              </div>
            </CardContent>
          </CardHeader>
        </Link>
      </div>
    </Card>
  );
};
