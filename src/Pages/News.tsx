import Container from "@/Components/Container";
import Heading from "@/Components/Global/Heading";
import { BlogNavData } from "@/Data/PageData";
import { useState } from "react";
import BlogCard from "@/Components/Card/BlogCard";
import NavList from "@/Components/Global/NavList";

const News = () => {
  const [navSelected, setNavSelected] = useState(0);

  return (
    <Container extraClasses="space-y-20 pt-20">
      <Heading
        headingVariant="main-heading"
        title="News"
        content="Lorem ipsum dolor sit amet consectetur. Praesent ac interdum nec nisl in. Mauris malesuada iacu"
      />

      <div className="pt-20">
        <Heading
          headingVariant="sub-heading"
          title="Our Blogs"
          content="Lorem ipsum dolor sit amet consectetur. Praesent ac interdum nec nisl in. Mauris malesuada iaculis tortor mi maecenas ut nibh pellentesque. Cursus sed malesuada feugiat venenatis "
        />
      </div>

      <section className="space-y-12.5">
        <NavList
          NavData={BlogNavData}
          navSelected={navSelected}
          setNavSelected={setNavSelected}
          extraClasses="justify-between gap-4"
        />

        <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,1fr))] justify-between">
          {[1, 2, 3, 4].map((_, idx) => (
            <BlogCard
              _id="/"
              image="/book-2.png"
              name="Jayesh Patil"
              date="10 Nov, 2023"
              title="Simple way of piece life"
              summary="Met een zorgvuldig samengestelde vragenlijst duikt jouw dierbare in zijn of haar mooiste herinneringen. Alleen of samen – dit leidt vaak tot "
              key={idx}
            />
          ))}
        </div>
      </section>
    </Container>
  );
};

export default News;
