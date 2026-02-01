import profileData from "@/data/profile.json";

export type ProfileData = typeof profileData;

export const useProfileData = () => {
  return profileData;
};

export default useProfileData;
