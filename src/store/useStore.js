import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create(
  persist(
    // set 更新状态，类似setState
    // get 获取状态，类似useSelector

    (set) => ({    // 状态和操作
      // 主题状态
      theme: "dark",
      setTheme: (theme) => {
        set({ theme })  // 直接设置主题
        if (theme === "dark") {// 同步更新DOM和localStorage
          document.documentElement.classList.add("dark");
          localStorage.setItem("theme", "dark");
        } else {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("theme", "light");
        }
      },

      // 导航栏状态
      isScrolled: false,
      setIsScrolled: (isScrolled) => set({ isScrolled }),

      isMenuOpen: false,
      setIsMenuOpen: (isMenuOpen) => set({ isMenuOpen }),

      // 技能筛选状态
      activeCategory: 'all',
      setActiveCategory: (activeCategory) => set({ activeCategory }),

      // 联系表单状态
      contactForm: {
        name: '',
        email: '',
        message: ''
      },
      updateContactForm: (field, value) => {  // 更新表单
        set((state) => ({
          contactForm: {
            ...state.contactForm,
            [field]: value,
          }
        }))
      },
      resetContactForm: () => { // 重置表单
        set({ contactForm: { name: '', email: '', message: '' } })
      },

      // 表单提交状态
      isSubmitting: false,
      setIsSubmitting: (isSubmitting) => set({ isSubmitting }),

      // 全局UI状态
      toast: null,
      setToast: (toast) => set({ toast }),
    }),

    {
      name: 'portfolio-store',  // lacalStorage中存储的key
      partialize: (state) => ({ theme: state.theme }),  // 决定那些状态需要持久化
    }
  )
)