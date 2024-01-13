"use client"

import { Card, CardDescription, CardTitle } from "@/components/ui/card"

import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <Card className="flex flex-col gap-4 p-4">
        <CardTitle>Erreur</CardTitle>
        <CardDescription>{error.message}</CardDescription>
        <Button
          onClick={() => reset()}
          variant={"destructive"}
          className="flex w-fit self-center"
        >
          Réessayer
        </Button>
      </Card>
    </div>
  )
}
