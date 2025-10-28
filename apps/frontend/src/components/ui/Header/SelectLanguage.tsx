"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import uk_flag from "../../../images/uk_lang.svg";
import est_lang from "../../../images/est_lang.svg";
import rus_lang from "../../../images/rus_lang.svg";
import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";

const languages = [
  { value: "uk", flag: uk_flag, alt: "English" },
  { value: "est", flag: est_lang, alt: "Estonian" },
  { value: "rus", flag: rus_lang, alt: "Russian" }
];

export default function SelectLanguage() {
  const [position, setPosition] = useState("uk");
  const [flag, setFlag] = useState<StaticImageData>(uk_flag);

  const handleLanguageChange = (value: string) => {
    setPosition(value);
    const selected = languages.find(lang => lang.value === value);
    if (selected) setFlag(selected.flag);

    localStorage.setItem("language", value);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setPosition(savedLanguage);
      const selected = languages.find(lang => lang.value === savedLanguage);
      if (selected) setFlag(selected.flag);
    }
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Image className="cursor-pointer" src={flag} alt="language" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup value={position} onValueChange={handleLanguageChange}>
          {languages
            .filter(lang => lang.value !== position)
            .map(lang => (
              <DropdownMenuRadioItem key={lang.value} value={lang.value}>
                <Image className="cursor-pointer" src={lang.flag} alt={lang.alt} />
              </DropdownMenuRadioItem>
            ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
