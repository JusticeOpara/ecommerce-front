// import {create} from 'zustand'
// import { Product } from '@/types'
// import { persist, createJSONStorage } from 'zustand/middleware'
// import toast from 'react-hot-toast'

// interface CartStore{
// items: Product[]
// addItem: (data: Product) => void
// removeItem: (id: string)=> void
// removeAll: () => void
// }

// const useCart = create(
//     persist<CartStore>((set, get)=> ({
//         items: [],
//         addItem: (data: Product)=>{
//             const currentItems = get().items;
//             const existingItem = currentItems.find((item) => item.id === data.id)
//             if(existingItem){
//                 return toast('Item already dey for cart no add another one abeg')
//             }

//             set({items: [...get().items, data]})
//             toast.success('Item added to cart.')
//         },
//         removeItem: (id: string) =>{
//             set({items:[...get().items.filter((item)=> item.id !== id)]})
//             toast.success("Item removed from the cart.")
//         },
//         removeAll: ()=> set({items: []})
//     }),{
//         name: 'cart-storage',
//         storage: createJSONStorage(() =>{
//               // Check if window is defined (client-side)
        
//             if (typeof window !== 'undefined') {
//                 return localStorage
//               }
//               // Return a dummy storage for SSR
//               return {
//                 getItem: () => null,
//                 setItem: () => null,
//                 removeItem: () => null,
//               }
//             }
//         )

        
//     })
// )

// export default useCart

import { create } from 'zustand'
import { Product } from '@/types'
import { persist, createJSONStorage } from 'zustand/middleware'
import toast from 'react-hot-toast'

interface CartStore {
  items: Product[]
  addItem: (data: Product) => void
  removeItem: (id: string) => void
  removeAll: () => void
  isInitialized?: boolean // Add this to track initialization
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      isInitialized: false, // Initial state
      addItem: (data: Product) => {
        const currentItems = get().items || []; // Safeguard against undefined
        const existingItem = currentItems.find((item) => item.id === data.id)
        
        if (existingItem) {
          return toast('Item already dey for cart no add another one abeg')
        }

        set({ items: [...currentItems, data] })
        toast.success('Item added to cart.')
      },
      removeItem: (id: string) => {
        const currentItems = get().items || []; // Safeguard against undefined
        set({ items: currentItems.filter((item) => item.id !== id) })
        toast.success("Item removed from the cart.")
      },
      removeAll: () => set({ items: [] })
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => {
        // Check if window is defined (client-side)
        if (typeof window !== 'undefined') {
          return window.localStorage
        }
        
        // Return a dummy storage for SSR
        return {
          getItem: () => Promise.resolve(null),
          setItem: () => Promise.resolve(),
          removeItem: () => Promise.resolve(),
        }
      }),
      // Add an onRehydrateStorage callback
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.isInitialized = true
        }
      },
    }
  )
)

export default useCart