import { motion } from "framer-motion";
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";

function About() {
  const team = [
    { name: "Joe", role: "Founder & CEO", photo: "teamPhoto/a.jpg" },
    { name: "Lory", role: "Product Manager", photo: "teamPhoto/b.jpg" },
    { name: "sergiya", role: "Designer", photo: "teamPhoto/e.jpg" },
  ];

  return (
    <div className="w-full font-sans text-stone-800 bg-gradient-to-b from-stone-100 via-stone-200 to-stone-300 overflow-x-hidden">
      
      {/* Hero / Header */}
      <section className="relative w-full h-[60vh] flex items-center justify-center text-center bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="space-y-4 max-w-2xl px-4"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold">
            About Fine Market
          </h1>
          <p className="text-lg md:text-xl text-stone-700">
            Learn more about our mission, vision, and the team that makes it all happen.
          </p>
        </motion.div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-stone-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Mission
            </h2>
            <p className="text-lg md:text-xl leading-relaxed">
              At Fine Market, we aim to deliver luxury lifestyle products that combine
              elegance, quality, and sustainability. Our mission is to provide
              exceptional customer experiences while offering carefully curated products.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gradient-to-tr from-stone-200 via-stone-400 to-stone-600 text-white">
        <Container>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Story</h2>
            <p className="text-lg md:text-xl leading-relaxed">
              Founded in 2023, Fine Market was born from a passion for
              sophisticated living and high-quality products. Our story is about
              attention to detail, customer happiness, and bringing a modern touch
              to everyday luxury.
            </p>
            <Button variant="primary" className="px-8 py-4 text-lg rounded-xl shadow-lg">
              Explore Our Products
            </Button>
          </motion.div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-stone-50">
        <Container>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-14">
            Meet the Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-stone-100 rounded-2xl shadow-lg p-6 text-center transition-transform"
              >
                <img
                  src={member.photo}
                  alt={member.name}
                  className="mx-auto rounded-full w-32 h-32 object-cover mb-4"
                />
                <h3 className="font-semibold text-xl">{member.name}</h3>
                <p className="text-stone-700">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 text-stone-800 text-center">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6 max-w-2xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold">Join Our Journey</h2>
            <p className="text-lg md:text-xl">
              Discover our exclusive collection and enjoy a premium shopping experience.
            </p>
            <Button variant="primary" className="px-8 py-4 text-lg rounded-xl shadow-lg">
              Visit Store
            </Button>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}

export default About;
