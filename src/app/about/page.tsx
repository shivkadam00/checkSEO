import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="max-w-prose m-auto space-y-3">
      <h1 className="text-3xl text-center font-bold">About</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum natus
        suscipit autem eos perferendis facere atque voluptatibus culpa
        architecto, molestias quis in eius libero, nobis vero nostrum incidunt
        distinctio itaque! Assumenda suscipit nam atque dolor?
      </p>
    </div>
  );
}
