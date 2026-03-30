// components/blog/Graph.tsx
"use client";
import dynamic from "next/dynamic";
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false }) as any;

export function Graph({ data, title }: { data: any[]; title?: string }) {
  return (
    <div className="my-4 w-full">
      <Plot
        data={data}
        layout={{ title, autosize: true, margin: { t: 40, r: 20, b: 40, l: 40 } }}
        useResizeHandler
        className="w-full"
      />
    </div>
  );
}
