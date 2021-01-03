import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktail",
        info:
          "Nice and Robust Expereience in this exotic Resort for a chilled out vacation with friends and family",
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "Nice and Robust Expereience in this exotic Resort for a chilled out vacation with friends and family",
      },
      {
        icon: <FaShuttleVan />,
        title: "free SHuttle",
        info:
          "Nice and Robust Expereience in this exotic Resort for a chilled out vacation with friends and family",
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info:
          "Nice and Robust Expereience in this exotic Resort for a chilled out vacation with friends and family",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />\
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
