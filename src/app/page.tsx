"use client";
import { DarkAvatar, LightAvatar } from "@/components/assets.svg";
import * as S from "./page.style";

interface pageProps {}

const page = ({}: pageProps) => {
  return (
    <S.pageContainer>
      <LightAvatar />
    </S.pageContainer>
  );
};

export default page;
