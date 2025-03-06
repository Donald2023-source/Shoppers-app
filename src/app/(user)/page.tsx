import Header from "@/Components/Header";
import Image from "next/image";
import Footer from "@/Components/Footer";
import Container from "@/Components/Container";
import Barner from "@/Components/Barner";
import Facilities from "@/Components/Facilities";
export default function Home() {
  return (
    <Container className="py-10">
       
       <Barner />
      <Facilities />
    </Container>
  
  );
}
