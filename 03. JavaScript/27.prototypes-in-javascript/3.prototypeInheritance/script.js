// inheritance
const User = {
    name: "top name",
    gmail: "top@gmail.com",
};

const Teacher = {
    makeVideos: true,
};

const TeachingSupport = {
    isAvailable: false,
};

const TAAssistant = {
    makeAssignments: "JS Assignment",
    fulltime: true,
    // __proto__: TeachingSupport      // Old Ways to inherit properties inside
};

// Old Ways to inherit properties outside
TAAssistant.__proto__ = TeachingSupport;

console.log(TAAssistant.isAvailable);

// New/Modern Ways to inherit properties 
Object.setPrototypeOf(TeachingSupport, Teacher);    // Teacher properties available in TeachingSupport
console.log(TeachingSupport.makeVideos);