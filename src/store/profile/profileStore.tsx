import { create } from 'zustand';

type DataT = {
  profilePhoto: string;
  fullname: string;
  email: string;
  phone: string;
  address: string;
}

interface BearState {
  profile: DataT;
  setDataProfile: (data: DataT) => void;
}

const useBearStore = create<BearState>()((set) => ({
  profile: {} as DataT,
  setDataProfile: (data) =>
    set((state) => ({
      ...state,
      profile: data,
    })),
}));


export default useBearStore;