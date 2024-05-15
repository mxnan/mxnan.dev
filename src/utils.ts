const formattedDate = (date: Date) => {
  const now = new Date();
  const diffMilliseconds = now.getTime() - date.getTime();

  const diffDays = Math.floor(diffMilliseconds / (1000 * 60 * 60 * 24));
  const diffWeeks = Math.floor(diffDays / 7);
  const diffMonths = Math.floor(diffDays / 30.436875);
  const diffYears = Math.floor(diffMonths / 12);

  if (diffYears >= 1) {
    return `${diffYears} year${diffYears > 1 ? "s" : ""} ago`;
  } else if (diffMonths >= 1) {
    return `${diffMonths} month${diffMonths > 1 ? "s" : ""} ago`;
  } else if (diffWeeks >= 1) {
    return `${diffWeeks} week${diffWeeks > 1 ? "s" : ""} ago`;
  } else if (diffDays >= 1) {
    return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;
  } else {
    return "Today";
  }
};
export { formattedDate };

//above function to get formatteddate for mdx pubAt
