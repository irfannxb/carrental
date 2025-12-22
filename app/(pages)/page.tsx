"use client";
import HeroSlider from "../components/HeroSlider";
import CarListingComponent from "../components/ui/carlisting";
import Testimonials from "../components/Testimonials";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { fetchCars } from "@/lib/features/Cars/CarSlice";
import { useAppDispatch } from "@/lib/hooks";
import { useCars } from "@/lib/getcars";

const Page = () => {
  const dispatch = useAppDispatch();
  const { cars, loading } = useCars();
  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);
  return (
    <>
      <HeroSlider />
      <div className="site-section">
        <div className="container">
          <h2 className="section-heading">
            <strong>How it works?</strong>
          </h2>
          <p className="mb-5">Easy steps to get you started</p>

          <div className="row mb-5">
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="step">
                <span>1</span>
                <div className="step-inner">
                  <span className="number text-primary">01.</span>
                  <h3>Select a car</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Vero, laboriosam!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="step">
                <span>2</span>
                <div className="step-inner">
                  <span className="number text-primary">02.</span>
                  <h3>Fill up form</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Vero, laboriosam!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="step">
                <span>3</span>
                <div className="step-inner">
                  <span className="number text-primary">03.</span>
                  <h3>Payment</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Vero, laboriosam!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="site-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 text-center order-lg-2">
              <div className="img-wrap-1 mb-5">
                <Image
                  src="/images/feature_01.png"
                  alt="Image"
                  className="img-fluid"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div className="col-lg-4 ml-auto order-lg-1">
              <h3 className="mb-4 section-heading">
                <strong>
                  You can easily avail our promo for renting a car.
                </strong>
              </h3>
              <p className="mb-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repudiandae, explicabo iste a labore id est quas, doloremque
                veritatis! Provident odit pariatur dolorem quisquam,
                voluptatibus voluptates optio accusamus, vel quasi quidem!
              </p>

              <p>
                <Link href="/testimonials" className="btn btn-primary">
                  Meet them now
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <CarListingComponent limit={6} cars={cars} loading={loading} />
      <Testimonials />
    </>
  );
};

export default Page;
