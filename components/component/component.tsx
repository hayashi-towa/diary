/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/WRe8aoddpZH
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Textarea } from "@/components/ui/textarea"

export function Component() {
  return (
    <div className="flex flex-col h-screen bg-[#F5F5F5]">
      <header className="bg-[#FFC0CB] py-4 px-6 shadow-md">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#333]">私の日記</h1>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-[#333] hover:bg-[#FFB6C1]">
              <CalendarIcon className="w-6 h-6" />
              <span className="sr-only">カレンダー</span>
            </Button>
            <Button variant="ghost" size="icon" className="text-[#333] hover:bg-[#FFB6C1]">
              <FilePenIcon className="w-6 h-6" />
              <span className="sr-only">新しい記事</span>
            </Button>
          </div>
        </div>
      </header>
      <div className="flex-1 grid grid-cols-12 gap-6 p-6">
        <div className="col-span-4 bg-white rounded-lg shadow-md p-4">
          <Calendar mode="single" initialFocus className="text-[#333] bg-[#FFF0F5]" />
        </div>
        <div className="col-span-8 bg-white rounded-lg shadow-md p-4">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="text-[#333] hover:bg-[#FFB6C1]">
                <ChevronLeftIcon className="w-6 h-6" />
              </Button>
              <span className="text-lg font-bold text-[#333]">2023年4月</span>
              <Button variant="ghost" size="icon" className="text-[#333] hover:bg-[#FFB6C1]">
                <ChevronRightIcon className="w-6 h-6" />
              </Button>
            </div>
            <Button variant="ghost" size="icon" className="text-[#333] hover:bg-[#FFB6C1]">
              <PlusIcon className="w-6 h-6" />
              <span className="sr-only">新しい記事</span>
            </Button>
          </div>
          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: 30 }, (_, i) => (
              <div
                key={i}
                className={`bg-[#FFF0F5] rounded-md p-2 text-center ${i === 9 ? "bg-[#FFB6C1] text-white" : ""}`}
              >
                {i + 1}
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Textarea
              placeholder="ここに日記を書いてください..."
              className="bg-[#FFF0F5] rounded-md p-4 w-full h-[300px] resize-none"
            />
            <div className="flex justify-end gap-2 mt-4">
              <Button variant="outline" className="bg-[#FFB6C1] text-white hover:bg-[#FF69B4]">
                保存
              </Button>
              <Button variant="outline" className="bg-[#FFB6C1] text-white hover:bg-[#FF69B4]">
                削除
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function CalendarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function ChevronLeftIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}


function ChevronRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}


function FilePenIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
    </svg>
  )
}


function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}
