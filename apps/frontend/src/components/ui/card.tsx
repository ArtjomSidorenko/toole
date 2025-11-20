import * as React from "react"

import { cva, VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const cardVariants = cva(
  "rounded-lg shadow border bg-card text-card-foreground",{
  variants: {
    variant: {
      auth: "w-[400px] border-[#E3ECFF] rounded-2xl px-8 py-6 flex flex-col gap-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
    }
  }
})


function Card({ className, variant, ...props }: React.ComponentProps<"div"> & VariantProps<typeof cardVariants>) {
  return (
    <div
      data-slot="card"
      className={cn(cardVariants({variant}), className)}
      {...props}
    />
  )
}


const cardHeaderVariant = cva(
  "flex flex-col",{
    variants: {
      variant: {
        auth: "p-[10px] gap-1 text-center"
      }
    }
  }
)

function CardHeader({ className, variant, ...props }: React.ComponentProps<"div"> & VariantProps<typeof cardHeaderVariant>) {

  return (
    <div
      data-slot="card-header"
      className={cn(cardHeaderVariant({variant}), className)}
      {...props}
    />
  )
}

const cardTitleVariant = cva(
  "font-semibold", {
    variants:{
      variant: {
        auth: "text-[24px] text-main-black"
      }
    }
  }
)

function CardTitle({ className, variant, ...props }: React.ComponentProps<"div"> & VariantProps<typeof cardTitleVariant>) {
  return (
    <div
      data-slot="card-title"
      className={cn(cardTitleVariant({variant}), className)}
      {...props}
    />
  )
}

const cardDescriptionVariant = cva(
  "font-semibold", {
    variants:{
      variant:{
        auth: "text-[14px] text-gray-500"
      }
    }
  }
)



function CardDescription({ className, variant, ...props }: React.ComponentProps<"div"> & VariantProps<typeof cardDescriptionVariant>) {
  return (
    <div
      data-slot="card-description"
      className={cn(cardDescriptionVariant({variant}), className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

const cardContentVariant = cva(
  "flex flex-col",
  {
    variants:{
      variant:{
        auth: "gap-[20px] px-[23px]"
      }
    }
  }
)

function CardContent({ className, variant, ...props }: React.ComponentProps<"div"> & VariantProps<typeof cardContentVariant>) {
  return (
    <div
      data-slot="card-content"
      className={cn(cardContentVariant({variant}), className)}
      {...props}
    />
  )
}

const cardFooterVariant = cva(
  "flex flex-col gap-6", {
    variants:{
      variant:{
        auth: "px-[23px]"
      }
    }
  }
)

function CardFooter({ className, variant, ...props }: React.ComponentProps<"div"> & VariantProps<typeof cardFooterVariant>) {
  return (
    <div
      data-slot="card-footer"
      className={cn(cardFooterVariant({variant}), className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
