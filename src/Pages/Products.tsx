import Badge from "@/Components/Badge";
import Container from "@/Components/Container";
import Heading from "@/Components/Global/Heading";
import BookComponent from "@/Components/Shared/BookComponent";
import { HomeBadgesAlt } from "@/Data/PageData";

const Products = () => {
  return (
    <div className="space-y-20 pt-20">
      <Heading
        headingVariant="main-heading"
        title="Products"
        content="Lorem ipsum dolor sit amet consectetur. Praesent ac interdum nec nisl in. Mauris malesuada iacu"
      />

      <section>
        <Container extraClasses="space-y-20">
          {[1, 2].map((_, index) => (
            <BookComponent key={index} />
          ))}
        </Container>
      </section>

      <section>
        <Container extraClasses="flex items-center justify-around py-12 flex-wrap gap-2">
          {HomeBadgesAlt.map((item, index) => (
            <Badge extraClasses="" key={index} {...item} />
          ))}
        </Container>
      </section>

      <section>
        <Container extraClasses="space-y-20">
          {[1, 2].map((_, index) => (
            <BookComponent key={index} />
          ))}
        </Container>
      </section>
    </div>
  );
};

export default Products;
