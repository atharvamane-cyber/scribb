import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function Footer() {
  return (
    <footer className="bg-background text-foreground py-12 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <h2 className="text-2xl font-bold mb-4">Scribb</h2>
            <p className="text-sm mb-4 text-muted-foreground">
              Empowering creators and businesses with innovative solutions.
            </p>
            <div className="flex space-x-4">
              {['Twitter', 'Facebook', 'Instagram'].map((social) => (
                <a key={social} href="#" className="text-muted-foreground hover:text-primary transition">
                  <span className="sr-only">{social}</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          {[
            { title: "Explore Scribb", items: ["Articles", "Blog Posts", "Guides", "Interviews", "Case Studies"] },
            { title: "Company", items: ["About Us", "Careers", "Press", "Contact"] },
            { title: "Support", items: ["Help Center", "FAQ", "Privacy Policy", "Terms of Service"] },
          ].map((section, index) => (
            <div key={index}>
              <h2 className="text-lg font-semibold mb-4">{section.title}</h2>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a href="#" className="text-muted-foreground hover:text-primary transition">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h2 className="text-lg font-semibold mb-4">Stay Connected</h2>
            <p className="text-sm mb-4 text-muted-foreground">
              Get the latest updates and insights from Scribb.
            </p>
            <form className="flex flex-col space-y-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-background border-input"
              />
              <Button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-primary-foreground transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2024 Scribb Inc. All rights reserved.
          </div>
          <div className="flex items-center space-x-6 text-sm">
            {['English', '₹ INR', 'Accessibility'].map((item) => (
              <a key={item} href="#" className="text-muted-foreground hover:text-primary transition">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;