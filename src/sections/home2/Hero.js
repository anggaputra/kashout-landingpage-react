import React from "react";
import { Link } from "gatsby";
import heroIndex from "../../assets/image/illustrations/home-index.png";
import heroIndex2 from "../../assets/image/illustrations/home-index2.png";

const Hero = ({ className, ...rest }) => {
  return (
    <>
      <div className={className} {...rest}>
        <div className="container">
          <div className="row justify-content-center">
            {/* <!-- Hero Content --> */}
            <div
              className="col-xl-5 col-lg-6 col-md-8 col-xs-10 order-2 order-lg-1"
              data-aos="fade-right"
              data-aos-delay="500"
            >
              <div className="pr-lg-10 pr-xl-0 pt-0 pt-lg-0 pb-13 pb-lg-0">
                <h1 className="font-size-12 mb-8">
                  Miliki Produk Impian Tanpa Berhutang
                </h1>
                <p className="font-size-7 mb-0 heading-default-color">
                  Membeli sesuatu tidak harus selalu berhutang, ubah kebiasaan
                  berhutang dengan menabung menggunakan Kashout
                </p>
                <div className=" pt-5 pt-lg-10">
                  <Link to={"/faq"} className="btn btn-dodger-blue-2 rounded-5">
                    Cara kerja
                  </Link>
                  {/*   <span className="d-block pt-5 pt-lg-9 heading-default-color">
                    Karena menabung lebih baik daripada berhutang
                    <Modal className="ml-2">Check our 1 min video</Modal>
                  </span> */}
                </div>
              </div>
            </div>
            {/* <!-- End Hero Content --> */}
            {/* <!-- l2-hero-image-group --> */}
            <div
              className="col-xl-7 col-lg-6 col-md-7 order-1 order-lg-2"
              data-aos="fade-left"
              data-aos-delay="800"
            >
              <div className="mt-lg-0">
                <div className="w-100">
                  <img className="mx-auto d-block" src={heroIndex} alt="" />
                </div>
                <div className="img-1">
                  <img className="w-50" src={heroIndex2} alt="" />
                </div>
              </div>
            </div>
            {/* <!-- End l2-hero-image-group --> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
