export function getInitials(fullName) {
    if (!fullName || typeof fullName !== "string") return "R"; 
  
    const names = fullName.trim().split(" ");
    const initials = names.slice(0, 2).map((name) => name[0].toUpperCase());
  
    return initials.join("");
  }