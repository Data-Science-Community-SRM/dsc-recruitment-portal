export const registerTechnical = async (
  firstName: string,
  lastName: string,
  srmEmail: string,
  registrationNumber: string,
  personalEmail: string,
  phoneNumber: string,
  department: string,
  year: number
) => {
  const collection = await getWorkshopCollection();
  const student = await collection.findOne({ registrationNumber });
  if (student) {
    
  }
  // This function will be implemented in the next task
  return data;
};
