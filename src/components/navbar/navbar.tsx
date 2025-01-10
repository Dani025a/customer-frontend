'use client'

import { useState } from 'react'
import { Menu, Search, User, ShoppingCart, LogOut, X, ChevronRight, ArrowLeft } from 'lucide-react'
import './navbar.css'
import { MainCategory, SubCategory, SubSubCategory } from '../../types/types'

const useCategories = (): MainCategory[] => {
  return [
    { id: 1, name: 'HARDWARE' },
    {
      id: 2,
      name: 'GAMING',
      subCategories: [
        {
          id: 21,
          name: 'GAMING PC',
          mainCategoryId: 2,
          subSubCategories: [
            { id: 211, name: 'GAMING LAPTOP', subCategoryId: 21 },
            { id: 212, name: 'DESKTOP GAMING PC', subCategoryId: 21 }
          ]
        },
        {
          id: 22,
          name: 'CONSOLES',
          mainCategoryId: 2,
          subSubCategories: [
            { id: 221, name: 'PLAYSTATION', subCategoryId: 22 },
            { id: 222, name: 'XBOX', subCategoryId: 22 },
            { id: 223, name: 'NINTENDO', subCategoryId: 22 },
            { id: 224, name: 'HANDHELD CONSOLE', subCategoryId: 22 },
            { id: 225, name: 'ACCESSORIES FOR CONSOLE', subCategoryId: 22 }
          ]
        },
        {
          id: 23,
          name: 'GAMING EQUIPMENT',
          mainCategoryId: 2,
          subSubCategories: [
            { id: 231, name: 'GAMING DESK', subCategoryId: 23 },
            { id: 232, name: 'GAMING HEADSET', subCategoryId: 23 },
            { id: 233, name: 'GAMING SPEAKERS', subCategoryId: 23 },
            { id: 234, name: 'GAMING KEYBOARD', subCategoryId: 23 },
            { id: 235, name: 'GAMING MOUSE', subCategoryId: 23 },
            { id: 236, name: 'GAMING MOUSE PAD', subCategoryId: 23 },
            { id: 237, name: 'GAMING PACKAGE', subCategoryId: 23 },
            { id: 238, name: 'GAMING MONITORS', subCategoryId: 23 },
            { id: 239, name: 'GAMING CHAIRS', subCategoryId: 23 },
            { id: 240, name: 'PC GLASSES', subCategoryId: 23 },
            { id: 241, name: 'PROTEIN DRINKS AND SHAKES', subCategoryId: 23 },
            { id: 242, name: 'GAME CONTROLLERS', subCategoryId: 23 },
            { id: 243, name: 'ACCESSORIES FOR GAMING KEYBOARD AND MOUSE', subCategoryId: 23 },
            { id: 244, name: 'ACCESSORIES FOR GAMING HEADSETS', subCategoryId: 23 },
            { id: 245, name: 'ACCESSORIES FOR GAMING CHAIRS', subCategoryId: 23 }
          ]
        },
        {
          id: 24,
          name: 'GAMING EQUIPMENT',
          mainCategoryId: 2,
          subSubCategories: [
            { id: 241, name: 'GAMES FOR NINTENDO SWITCH', subCategoryId: 24 },
            { id: 242, name: 'GAMES FOR PLAYSTATION 4', subCategoryId: 24 },
            { id: 243, name: 'GAMES FOR PLAYSTATION 5', subCategoryId: 24 },
            { id: 244, name: 'GAMES FOR XBOX ONE', subCategoryId: 24 },
            { id: 245, name: 'GAMES FOR XBOX SERIES X/S', subCategoryId: 24 }
          ]
        }
      ]
    },
    { id: 3, name: 'PC & TABLETS' },
    { id: 4, name: 'TV & HIFI' },
    { id: 5, name: 'PHONES' }
  ]
}

export default function Navbar() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isMobileCategoriesOpen, setIsMobileCategoriesOpen] = useState(false)
  const [mobileMenuState, setMobileMenuState] = useState<{
    level: 'main' | 'sub' | 'subsub';
    currentCategory?: MainCategory;
    currentSubcategory?: SubCategory;
  }>({ level: 'main' })
  const categories = useCategories()

  const handleLogout = () => {
    setIsLoggedIn(false)
  }

  const toggleMobileCategories = () => {
    setIsMobileCategoriesOpen(!isMobileCategoriesOpen)
    setMobileMenuState({ level: 'main' })
  }

  const handleMobileCategoryClick = (category: MainCategory) => {
    if (category.subCategories) {
      setMobileMenuState({ level: 'sub', currentCategory: category })
    } else {
      console.log(`Navigating to category: ${category.name}`)
      toggleMobileCategories()
    }
  }

  const handleMobileSubcategoryClick = (subcategory: SubCategory) => {
    if (subcategory.subSubCategories) {
      setMobileMenuState({ 
        level: 'subsub', 
        currentCategory: mobileMenuState.currentCategory, 
        currentSubcategory: subcategory 
      })
    } else {
      console.log(`Navigating to subcategory: ${subcategory.name}`)
      toggleMobileCategories()
    }
  }

  const handleMobileBackClick = () => {
    if (mobileMenuState.level === 'subsub') {
      setMobileMenuState({ 
        level: 'sub', 
        currentCategory: mobileMenuState.currentCategory 
      })
    } else if (mobileMenuState.level === 'sub') {
      setMobileMenuState({ level: 'main' })
    }
  }

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="navbar desktop-nav">
        <div className="nav-container">
          <div className="nav-top">
            <a href="/" className="logo">
              <img src="/logo.svg" alt="DG Electronics" width="180" height="40" />
            </a>
            
            <div className="search-container">
              <input type="text" placeholder="SEARCH..." className="search-input" />
              <button className="search-button">
                <Search className="w-5 h-5" />
              </button>
            </div>

            <div className="nav-actions">
              {isLoggedIn ? (
                <>
                  <a href="/profile" className="nav-action">
                    <User className="w-5 h-5" />
                    <span>PROFILE</span>
                  </a>
                  <a href="/cart" className="nav-action">
                    <ShoppingCart className="w-5 h-5" />
                    <span>CART</span>
                  </a>
                  <button onClick={handleLogout} className="logout-button nav-action">
                    <LogOut className="w-5 h-5" />
                    <span>LOGOUT</span>
                  </button>
                </>
              ) : (
                <>
                  <a href="/signup" className="nav-action" onClick={(e) => { e.preventDefault(); setIsLoggedIn(true); }}>
                    <User className="w-5 h-5" />
                    <span>SIGN UP</span>
                  </a>
                  <a href="/login" className="nav-action" onClick={(e) => { e.preventDefault(); setIsLoggedIn(true); }}>
                    <User className="w-5 h-5" />
                    <span>LOG IN</span>
                  </a>
                  <a href="/cart" className="nav-action">
                    <ShoppingCart className="w-5 h-5" />
                    <span>CART</span>
                  </a>
                </>
              )}
            </div>
          </div>

          <div className="nav-categories">
            {categories.map((category) => (
              <div
                key={category.id}
                className={`category-item ${activeCategory === category.name ? 'active' : ''}`}
                onMouseEnter={() => setActiveCategory(category.name)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                <a href={`/products/${category.name.toLowerCase().replace(/\s+/g, '-')}`} className="text-main">
                  {category.name}
                </a>
                
                {activeCategory === category.name && category.subCategories && (
                  <div className="mega-menu">
                    <div className="mega-menu-content">
                      {category.subCategories.map((subcategory) => (
                        <div key={subcategory.id} className="mega-menu-column">
                          <a 
                            href={`/products/${category.name.toLowerCase().replace(/\s+/g, '-')}/${subcategory.name.toLowerCase().replace(/\s+/g, '-')}`}
                            className="mega-menu-title text-sub"
                          >
                            {subcategory.name}
                          </a>
                          {subcategory.subSubCategories && (
                            <ul className="mega-menu-list">
                              {subcategory.subSubCategories.map((subsubcategory) => (
                                <li key={subsubcategory.id}>
                                  <a 
                                    href={`/products/${category.name.toLowerCase().replace(/\s+/g, '-')}/${subcategory.name.toLowerCase().replace(/\s+/g, '-')}/${subsubcategory.name.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="text-subsub"
                                  >
                                    {subsubcategory.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="navbar mobile-nav">
        <button onClick={toggleMobileCategories} className="mobile-nav-item">
          <Menu className="w-6 h-6" />
          <span>MENU</span>
        </button>
        <a href="/search" className="mobile-nav-item">
          <Search className="w-6 h-6" />
          <span>SEARCH</span>
        </a>
        {isLoggedIn ? (
          <>
            <a href="/profile" className="mobile-nav-item">
              <User className="w-6 h-6" />
              <span>PROFILE</span>
            </a>
            <a href="/cart" className="mobile-nav-item">
              <ShoppingCart className="w-6 h-6" />
              <span>CART</span>
            </a>
          </>
        ) : (
          <>
            <a href="/login" className="mobile-nav-item" onClick={(e) => { e.preventDefault(); setIsLoggedIn(true); }}>
              <User className="w-6 h-6" />
              <span>LOG IN</span>
            </a>
            <a href="/cart" className="mobile-nav-item">
              <ShoppingCart className="w-6 h-6" />
              <span>CART</span>
            </a>
          </>
        )}
      </nav>

      {/* Mobile Categories Menu */}
      <div className={`mobile-categories-menu ${isMobileCategoriesOpen ? 'open' : ''}`}>
        <div className="mobile-categories-header">
          <h2>Categories</h2>
          <button onClick={toggleMobileCategories}>
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="mobile-categories-content">
          {mobileMenuState.level !== 'main' && (
            <button className="mobile-back-button" onClick={handleMobileBackClick}>
              <ArrowLeft className="w-5 h-5" />
              Back
            </button>
          )}
          <div className="mobile-categories-title">
            {mobileMenuState.level === 'main' && 'Categories'}
            {mobileMenuState.level === 'sub' && mobileMenuState.currentCategory?.name}
            {mobileMenuState.level === 'subsub' && mobileMenuState.currentSubcategory?.name}
          </div>
          {mobileMenuState.level === 'main' && (
            <>
              {categories.map((category) => (
                <button
                  key={category.id}
                  className="mobile-category-button text-main"
                  onClick={() => handleMobileCategoryClick(category)}
                >
                  {category.name}
                  {category.subCategories && <ChevronRight className="w-5 h-5" />}
                </button>
              ))}
            </>
          )}
          {mobileMenuState.level === 'sub' && mobileMenuState.currentCategory && (
            <>
              {mobileMenuState.currentCategory.subCategories?.map((subcategory) => (
                <button
                  key={subcategory.id}
                  className="mobile-category-button text-sub"
                  onClick={() => handleMobileSubcategoryClick(subcategory)}
                >
                  {subcategory.name}
                  {subcategory.subSubCategories && <ChevronRight className="w-5 h-5" />}
                </button>
              ))}
              <button 
                className="mobile-select-category"
                onClick={() => {
                  console.log(`Selected category: ${mobileMenuState.currentCategory?.name}`);
                  toggleMobileCategories();
                }}
              >
                {mobileMenuState.currentCategory.name}
              </button>
            </>
          )}
          {mobileMenuState.level === 'subsub' && mobileMenuState.currentSubcategory && (
            <>
              {mobileMenuState.currentSubcategory.subSubCategories?.map((subsubcategory) => (
                <button
                  key={subsubcategory.id}
                  className="mobile-category-button text-subsub"
                  onClick={() => {
                    console.log(`Navigating to subsubcategory: ${subsubcategory.name}`);
                    toggleMobileCategories();
                  }}
                >
                  {subsubcategory.name}
                </button>
              ))}
              <button 
                className="mobile-select-category"
                onClick={() => {
                  console.log(`Selected subcategory: ${mobileMenuState.currentSubcategory?.name}`);
                  toggleMobileCategories();
                }}
              >
                {mobileMenuState.currentSubcategory.name}
              </button>
            </>
          )}
        </div>
      </div>
    </>
  )
}

