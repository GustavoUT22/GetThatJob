import styled from "@emotion/styled";

export const FlexRowXs = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;
export const FlexColumnXs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const FlexRowSm = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;
export const FlexColumnSm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FlexRowMd = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;
export const FlexColumnMd = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FlexRowLg = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
`;
export const FlexColumnLg = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const FlexBetweenRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const FlexBetweenColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: auto;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export function Filter(jobs, categoryOptions, typeOptions) {
  if (categoryOptions.length !== 0 && typeOptions.length !== 0) {
    const categoryFilter = jobs.filter((job) =>
      categoryOptions.some((option) => job.category.includes(option))
    );
    const typeFilter = categoryFilter.filter((job) =>
      typeOptions.some((option) => job.job_type.includes(option))
    );
    return typeFilter;
  }

  if (categoryOptions.length !== 0) {
    const categoryFilter = jobs.filter((job) =>
      categoryOptions.some((option) => job.category.includes(option))
    );
    return categoryFilter;
  }

  if (typeOptions.length !== 0) {
    const typeFilter = jobs.filter((job) =>
      typeOptions.some((option) => job.job_type.includes(option))
    );
    return typeFilter;
  }

  return jobs;
}

export function priceFilter(jobs, min, max) {
  if (min !== "" && max !== "") {
    const minMaxfilter = jobs.filter(
      (job) =>
        min <= job.salary + 1000 &&
        (job.salary + 1000 <= max || job.salary - 1000 <= max)
    );
    return minMaxfilter;
  }

  if (min !== "") {
    const minFilter = jobs.filter((job) => min <= job.salary + 1000);
    return minFilter;
  }

  if (max !== "") {
    const maxFilter = jobs.filter(
      (job) => job.salary - 1000 <= max && job.salary + 1000 >= max
    );
    return maxFilter;
  }

  return jobs;
}

export function searchBarFilter(jobs, searchTerm) {
  if (searchTerm !== "") {
    const filteredData = jobs.filter(
      (job) =>
        job.title.toLowerCase().includes(searchTerm) ||
        job.company_name.toLowerCase().includes(searchTerm)
    );
    return filteredData;
  }
  return jobs;
}

export function getSentTime(date) {
  const sentDate = new Date(date);
  const currentDate = new Date();

  const timeDifferenceInMilliseconds = currentDate - sentDate;
  const timeDifferenceInMinutes = Math.floor(
    timeDifferenceInMilliseconds / (1000 * 60)
  );
  const timeDifferenceInHours = Math.floor(
    timeDifferenceInMilliseconds / (1000 * 60 * 60)
  );
  const timeDifferenceInDays = Math.floor(
    timeDifferenceInMilliseconds / (1000 * 60 * 60 * 24)
  );

  let formattedTimeDifference;

  if (timeDifferenceInMinutes < 1) {
    formattedTimeDifference = "sent just now";
  } else if (timeDifferenceInMinutes < 60) {
    formattedTimeDifference = `sent ${timeDifferenceInMinutes} min. ago`;
  } else if (timeDifferenceInHours < 24) {
    formattedTimeDifference = `sent ${timeDifferenceInHours} hour(s) ago`;
  } else {
    formattedTimeDifference = `sent ${timeDifferenceInDays} day(s) ago`;
  }

  return formattedTimeDifference;
}

export function getFormattedDate(date) {
  const [year, month, day] = date.slice(2, 10).split("-");
  return `${month}/${day}/${year}`;
}

export function getFixedSalary(salary, range) {
  if (range === "min") {
    return salary >= 1000
      ? `${((salary - 1000) / 1000).toFixed(1)}k`
      : `${salary}`;
  } else {
    return salary >= 1000
      ? `${((salary + 1000) / 1000).toFixed(1)}k`
      : `${salary}`;
  }
}
