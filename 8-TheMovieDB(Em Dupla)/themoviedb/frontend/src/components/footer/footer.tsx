import { Limelight } from "next/font/google";
import "./footer.css";

const limelight = Limelight({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
  });

export default function Footer() {
  return (
    <div className="footer">
      <div className={limelight.className}>
        <p class="text-2xl font-extrabold">Everyflick</p>
      </div>
    </div>
  );
}
