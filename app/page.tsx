import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
	return (
		<main className="p-4">
			<div className="flex w-full max-w-sm items-center space-x-2">
				<Input type="text" placeholder="Input" />
				<Button type="submit">Send</Button>
			</div>
		</main>
	);
}
