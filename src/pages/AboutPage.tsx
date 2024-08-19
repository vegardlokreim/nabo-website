import Restaurant from '../assets/nabo_restaurant.jpg'
import AltHero from "../components/AltHero";
import PageContainer from '../components/PageContainer';

export default function AboutPage() {
    return (
        <PageContainer>
            <div className="@container">
                <div className="@[480px]:p-4">
                    <AltHero backgroundImg={Restaurant} title={"About"} text={"Om oss"} />
                </div>
            </div>
            <h2 className="text-[#181411] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Our Story</h2>
            <p className="text-[#181411] text-base font-normal leading-normal pb-3 pt-1 px-4">
                Sushi Umi was founded in 2015 by Master Chef Hiroshi Nakamura. Chef Nakamura has over 20 years of experience in the culinary industry and has worked at some of the
                most prestigious sushi restaurants in Japan and the United States. He is known for his meticulous attention to detail and his innovative approach to traditional
                Japanese cuisine. Chef Nakamura's dedication to excellence has earned Sushi Umi a loyal following of discerning diners who appreciate the restaurant's commitment to
                quality and craftsmanship.
            </p>
            <h2 className="text-[#181411] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Our Mission</h2>
            <p className="text-[#181411] text-base font-normal leading-normal pb-3 pt-1 px-4">
                At Sushi Umi, we believe in serving more than just food; we serve an experience. We want to take you on a journey of flavors, textures, and emotions with each bite.
                Our mission is to create a space where our guests can feel transported to the heart of Tokyo, even if they're in the heart of San Francisco. We aim to be a bridge
                between cultures, connecting people through the universal language of food. Our commitment to quality, sustainability, and hospitality is unwavering, and we
                continuously strive to exceed our guests' expectations.
            </p>



            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                <div className="flex flex-col gap-3 pb-3">
                    <img src="https://cdn.usegalileo.ai/sdxl10/48ea3906-e268-47b4-8227-d45ab9839f7b.png" />
                </div>
                <div className="flex flex-col gap-3 pb-3">


                    <img src='https://cdn.usegalileo.ai/sdxl10/fd12c9ab-429f-48d7-92d5-7e49d600234f.png' />

                </div>
                <div className="flex flex-col gap-3 pb-3">
                    <img src="https://cdn.usegalileo.ai/sdxl10/010d3aa2-3eca-4f3c-b204-7dca42717ad5.png" />
                </div>
            </div>

        </PageContainer>
    )
}