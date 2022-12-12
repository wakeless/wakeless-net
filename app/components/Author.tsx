const logo = require("../../public/logo.png");
export function Author() {
  const person = {
    imageUrl: "https://ferocia.com.au/images/team/mikeg.jpg",
    name: "Michael Gall",
    role: "Software Publican",
  };
  return (
    <div className="flex items-center space-x-4 lg:space-x-6">
      <img
        className="h-16 w-16 rounded-full lg:h-20 lg:w-20"
        src={person.imageUrl}
        alt=""
      />
      <div className="space-y-1 text-lg font-medium leading-6">
        <h3>
          <a href="https://twitter.com/wakelessnet">{person.name}</a>
        </h3>
        <p className="text-secondary-600">{person.role}</p>
      </div>
    </div>
  );
}
