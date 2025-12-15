"use client";
import React from "react";
import { testimonials } from "../lib/testimonials";
import { testimonial_interface } from "../lib/testimonials";
import { Pathname, usePathname } from "next/navigation";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const Testimonials = () => {
  const pathname = usePathname();
  return (
    <div className="site-section bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <h2 className="section-heading">
              <strong>Testimonials</strong>
            </h2>
            <p className="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="row">
          {pathname === "/testimonials" ? (
            <>
              {testimonials.map((testimonial: testimonial_interface) => (
                <>
                  <div className="col-lg-4 mb-4">
                    <div className="testimonial-2">
                      <blockquote className="mb-4">
                        <p>{testimonial.description}</p>
                      </blockquote>
                      <div className="d-flex v-card align-items-center">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={50}
                          height={50}
                          className="img-fluid mr-3"
                        />
                        <div className="author-name">
                          <span className="d-block">{testimonial.name}</span>
                          <span>{testimonial.job}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </>
          ) : (
            <>
              <Carousel>
                <CarouselContent>
                  {testimonials.map((testimonial: testimonial_interface) => (
                    <CarouselItem key={testimonial.id} className="basis-1/3">
                      <div className="testimonial-2">
                        <blockquote className="mb-4">
                          <p>{testimonial.description}</p>
                        </blockquote>
                        <div className="d-flex v-card align-items-center">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={50}
                            height={50}
                            className="img-fluid mr-3"
                          />
                          <div className="author-name">
                            <span className="d-block">{testimonial.name}</span>
                            <span>{testimonial.job}</span>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
