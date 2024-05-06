
import { Link } from "react-router-dom";

import { Box, SimpleGrid, Text, Image } from "@chakra-ui/react";

// Poster
import { AiOutlineCaretRight } from "react-icons/ai";
const posterData = [
  {
    id: 1,
    image:
      "https://www.sephora.com/contentimages/2023-9-22-black-owned-brands-site-desktop-mobile-home-page-rwd-marketing-banner-800x534-en-us.jpg?imwidth=400",
    title: "The Need-to-Know",
    paragraph: "Shop game-changing hair care from adwoa beauty, RIES, and BREAD BEAUTY SUPPLY. ",
    link: "SNAP THEM UP ▸",
  },
  {
    id: 2,
    image:
      "https://www.sephora.com/contentimages/2023-06-02-RWD-homepage-site-desktop-mobile-home-page-marketing-banner-800x534-beauty-on-demand-release.jpg?imwidth=400",
    title: "Beauty on Demand",
    paragraph: "Fast and easy options that work for you.",
    link: "LEARN MORE ▸",
  },
  {
    id: 3,
    image:
      "https://www.sephora.com/contentimages/site-desktop-mobile-home-page-marketing-banner-1cta-0imagelinks-abtest-wave1_01.jpg?imwidth=400",
    title: "Save with Auto-Replenish",
    paragraph: "Get 5% off subscription deliveries and never run out of your go-tos again.",
    link: "SHOP NOW ▸",
  },
];
export const Poster2 = () => {
  return (
    <>
      <SimpleGrid
        display="flex"
        justifyContent="space-between"
        px={32}
        pt={12}
        m="auto"
        id="postercontainer"
      >
        {posterData.map((ele) => (
          <Box id="singlePosterContent" key={ele.id} borderRadius="5px">
            <Box id="posterImageContainer" w="fit-content">
              <Image className="rounded-t-md" m="auto" src={ele.image} />
            </Box>
            <Box
            id="posterContenttextDiv"
              pt={6}
              pb={6}
              px={3}
              style={{
                background:
                  ele.id === 1
                    ? "#8FBBC6"
                    : ele.id === 2
                    ? "#BDDCEE"
                    : ele.id === 3
                    ? "#077BAA"
                    : null,
                color: ele.id === 3 && "white",
              }}
            >
              <Text fontSize={18} fontWeight={700}>
                {ele.title}
              </Text>
              <Text className="hover:underline" fontSize={14} fontWeight={400}>
                {ele.paragraph.slice(0,48)}
              </Text>
              <Box mt={5} display="flex" alignItems="center" gap={2}>
                <Link
                  className="font-bold text-xs hover:underline"
                  mt={5}
                  to={ele.id}
                >
                  {ele.link}{" "}
                </Link>
              </Box>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
      <hr id="hr" className="border mx-32 mt-10" />
    </>
  );
};


