import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import type { HeadFC, PageProps } from "gatsby";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const LivingBoatPage: React.FC<PageProps> = () => {
  return (
    <main className="min-h-screen bg-slate-900">
      <div className="container mx-auto px-4 py-12">
        {/* Title and Subtitle */}
        <div className="mb-8">
          <h1
            className="text-5xl font-bold text-slate-50 mb-4 tracking-tight"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            The Living Boat
          </h1>
          <p className="text-xl text-slate-400">
            Traditional Sayap boats of the Bajau Laut people
          </p>
        </div>

        {/* Full Width Sketch Image */}
        <div className="w-full mb-12">
          <StaticImage
            src="../../../images/sayap-living-boat-sketch.png"
            alt="Sayap Living Boat Sketch"
            className="w-full"
            layout="fullWidth"
          />
        </div>

        {/* 3D Annotated View */}
        <div className="mb-12">
          <h2
            className="text-4xl font-bold text-slate-50 mb-6 tracking-tight"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            3D Annotated View
          </h2>
          <div className="sketchfab-embed-wrapper w-full">
            <iframe
              title="Sayap Living Boat"
              allowFullScreen
              allow="autoplay; fullscreen; xr-spatial-tracking"
              xr-spatial-tracking="true"
              execution-while-out-of-viewport="true"
              execution-while-not-rendered="true"
              src="https://sketchfab.com/models/2976cd41e20440d788f87ce7348e1eb5/embed?autostart=1&ui_infos=0&ui_theme=dark"
              className="w-full h-[600px]"
              tabIndex={0}
              style={{
                touchAction: "none",
                userSelect: "none",
                WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
              }}
            />
          </div>
        </div>

        {/* Masonry Image Gallery */}
        <div className="mb-12">
          <h2
            className="text-4xl font-bold text-slate-50 mb-6 tracking-tight"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            Photo Gallery
          </h2>

          {/* Masonry Container */}
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry gutter="16px">
              <StaticImage
                src="../../../images/sayap-living-boat-img (1).JPG"
                alt="Boat 1"
                layout="constrained"
                placeholder="blurred"
                imgStyle={{ height: "auto", width: "100%" }}
              />
              <StaticImage
                src="../../../images/sayap-living-boat-img (2).jpg"
                alt="Boat 2"
                layout="constrained"
                placeholder="blurred"
                imgStyle={{ height: "auto", width: "100%" }}
              />
              <StaticImage
                src="../../../images/sayap-living-boat-img (3).jpg"
                alt="Boat 3"
                layout="constrained"
                placeholder="blurred"
                imgStyle={{ height: "auto", width: "100%" }}
              />
              <StaticImage
                src="../../../images/sayap-living-boat-img (4).jpg"
                alt="Boat 4"
                layout="constrained"
                placeholder="blurred"
                imgStyle={{ height: "auto", width: "100%" }}
              />
              <StaticImage
                src="../../../images/sayap-living-boat-img (5).jpg"
                alt="Boat 5"
                layout="constrained"
                placeholder="blurred"
                imgStyle={{ height: "auto", width: "100%" }}
              />
              <StaticImage
                src="../../../images/sayap-living-boat-img (6).jpg"
                alt="Boat 6"
                layout="constrained"
                placeholder="blurred"
                imgStyle={{ height: "auto", width: "100%" }}
              />
              <StaticImage
                src="../../../images/sayap-living-boat-img (7).jpg"
                alt="Boat 7"
                layout="constrained"
                placeholder="blurred"
                imgStyle={{ height: "auto", width: "100%" }}
              />
              <StaticImage
                src="../../../images/sayap-living-boat-img (8).jpg"
                alt="Boat 8"
                layout="constrained"
                placeholder="blurred"
                imgStyle={{ height: "auto", width: "100%" }}
              />
              <StaticImage
                src="../../../images/sayap-living-boat-img (9).jpg"
                alt="Boat 9"
                layout="constrained"
                placeholder="blurred"
                imgStyle={{ height: "auto", width: "100%" }}
              />
              <StaticImage
                src="../../../images/sayap-living-boat-img (10).JPG"
                alt="Boat 10"
                layout="fixed"
                width={420}
                height={525}
                placeholder="blurred"
              />
              <StaticImage
                src="../../../images/sayap-living-boat-img (12).JPG"
                alt="Boat 12"
                layout="constrained"
                placeholder="blurred"
                imgStyle={{ height: "auto", width: "100%" }}
              />
              <StaticImage
                src="../../../images/sayap-living-boat-img (13).JPG"
                alt="Boat 13"
                layout="constrained"
                placeholder="blurred"
                imgStyle={{ height: "auto", width: "100%" }}
              />
              <StaticImage
                src="../../../images/sayap-living-boat-img (14).JPG"
                alt="Boat 14"
                layout="fixed"
                width={420}
                height={525}
                placeholder="blurred"
              />
              <StaticImage
                src="../../../images/sayap-living-boat-img (15).JPG"
                alt="Boat 15"
                layout="constrained"
                placeholder="blurred"
                imgStyle={{ height: "auto", width: "100%" }}
              />
              <StaticImage
                src="../../../images/sayap-living-boat-img (16).JPG"
                alt="Boat 16"
                layout="constrained"
                placeholder="blurred"
                imgStyle={{ height: "auto", width: "100%" }}
              />
              <StaticImage
                src="../../../images/sayap-living-boat-img (17).JPG"
                alt="Boat 17"
                layout="constrained"
                placeholder="blurred"
                imgStyle={{ height: "auto", width: "100%" }}
              />
              <StaticImage
                src="../../../images/sayap-living-boat-img (18).JPG"
                alt="Boat 18"
                layout="constrained"
                placeholder="blurred"
                imgStyle={{ height: "auto", width: "100%" }}
              />
              <StaticImage
                src="../../../images/sayap-living-boat-img (19).jpg"
                alt="Boat 19"
                layout="constrained"
                placeholder="blurred"
                imgStyle={{ height: "auto", width: "100%" }}
              />
              <StaticImage
                src="../../../images/sayap-living-boat-img (20).JPG"
                alt="Boat 20"
                layout="fixed"
                width={420}
                height={525}
                placeholder="blurred"
              />
              <StaticImage
                src="../../../images/sayap-living-boat-img (21).JPG"
                alt="Boat 21"
                layout="fixed"
                width={420}
                height={525}
                placeholder="blurred"
              />
              <StaticImage
                src="../../../images/sayap-living-boat-img (22).JPG"
                alt="Boat 22"
                layout="constrained"
                placeholder="blurred"
                imgStyle={{ height: "auto", width: "100%" }}
              />
              <StaticImage
                src="../../../images/sayap-living-boat-img (23).JPG"
                alt="Boat 23"
                layout="fixed"
                width={420}
                height={525}
                placeholder="blurred"
              />
              <StaticImage
                src="../../../images/sayap-living-boat-img (24).JPG"
                alt="Boat 24"
                layout="constrained"
                placeholder="blurred"
                imgStyle={{ height: "auto", width: "100%" }}
              />
              <StaticImage
                src="../../../images/sayap-living-boat-img (25).JPG"
                alt="Boat 25"
                layout="constrained"
                placeholder="blurred"
                imgStyle={{ height: "auto", width: "100%" }}
              />
              <StaticImage
                src="../../../images/sayap-living-boat-img (26).JPG"
                alt="Boat 26"
                layout="fixed"
                width={420}
                height={525}
                placeholder="blurred"
              />
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </main>
  );
};

export default LivingBoatPage;

export const Head: HeadFC = () => (
  <>
    <title>The Living Boat | Boats of the Bajau Laut</title>
    <meta
      name="description"
      content="Explore the traditional Sayap living boats of the Bajau Laut people through photographs and 3D models."
    />
  </>
);
