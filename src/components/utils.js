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
  if (min !== null && max !== null) {
    const minMaxfilter = jobs.filter(
      (job) =>
        min <= job.salary + 1000 &&
        (job.salary + 1000 <= max || job.salary - 1000 <= max)
    );
    return minMaxfilter;
  }

  if (min !== null) {
    const minFilter = jobs.filter((job) => min <= job.salary + 1000);
    return minFilter;
  }

  if (max !== null) {
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
