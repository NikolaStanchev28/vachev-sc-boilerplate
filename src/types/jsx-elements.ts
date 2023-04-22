import { PropsWithChildren, PropsWithRef } from "react";

type PropsWithRefAndChildren<T> = PropsWithChildren<PropsWithRef<T>>;

declare global {
  type HTMLMainProps = PropsWithRefAndChildren<JSX.IntrinsicElements["main"]>;

  type HTMLDivProps = PropsWithRefAndChildren<PropsWithRef<JSX.IntrinsicElements["div"]>>;

  type HTMLSpanProps = PropsWithRefAndChildren<JSX.IntrinsicElements["span"]>;

  type HTMLSectionProps = PropsWithRefAndChildren<JSX.IntrinsicElements["section"]>;

  type HTMLNavProps = PropsWithRefAndChildren<JSX.IntrinsicElements["nav"]>;

  type HTMLHeaderProps = PropsWithRefAndChildren<JSX.IntrinsicElements["header"]>;

  type HTMLFooterProps = PropsWithRefAndChildren<JSX.IntrinsicElements["footer"]>;

  type HTMLButtonProps = PropsWithRefAndChildren<JSX.IntrinsicElements["button"]>;

  type HTMLAnchorProps = PropsWithRefAndChildren<JSX.IntrinsicElements["a"]>;

  type HTMLInputProps = PropsWithRef<
    Omit<JSX.IntrinsicElements["input"], "children" | "dangerouslySetInnerHTML">
  >;

  type HTMLTextAreaProps = PropsWithRefAndChildren<
    Omit<JSX.IntrinsicElements["textarea"], "dangerouslySetInnerHTML">
  >;

  type HTMLFormProps = PropsWithRefAndChildren<JSX.IntrinsicElements["form"]>;

  type HTMLHeadingProps = PropsWithRefAndChildren<JSX.IntrinsicElements["h1"]>;

  type HTMLParagraphProps = PropsWithRefAndChildren<JSX.IntrinsicElements["p"]>;

  type HTMLSVGProps = PropsWithRefAndChildren<JSX.IntrinsicElements["svg"]>;

  type HTMLLabelProps = PropsWithRefAndChildren<JSX.IntrinsicElements["label"]>;

  type HTMLAsideProps = PropsWithRefAndChildren<JSX.IntrinsicElements["aside"]>;
}
