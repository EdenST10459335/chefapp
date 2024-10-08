import React, {useState} from "react";
import { Text, View, TextInput, Button, ScrollView, Image} from "react-native";
import { Picker } from '@react-native-picker/picker';
import styles from "./styles.js";
import menuItem from "./menu.json";


export default function Index() {
  const [menu, setMenu] = useState(menuItem);
  const menuTotal = menu.length

  const [dishName, setdishName] = useState("");
  const [description, setDescription] = useState("");
  const [course, setCourse] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("")
  
 // Types for Course and MenuItem
type Course = 'Starters' | 'Mains' | 'Desserts';

interface MenuItem {
    dishName: string;
    description: string;
    course: Course;
    price: number;
}


// Predefined courses list
const courses: Course[] = ['Starters', 'Mains', 'Desserts'];

// Menu items array to store added items
let menuItems: MenuItem[] = [];

// Function to display the home screen
function displayHomeScreen() {
    console.log("Welcome to the Heavens kitchen!");

    // Show menu items
    if (menuItems.length > 0) {
        console.log("Menu Items:");
        menuItems.forEach((item, index) => {
            console.log(`${index + 1}. ${item.dishName} - ${item.course} - $${item.price}`);
        });
        console.log(`Total number of menu items: ${menuItems.length}`);
    } else {
        console.log("No menu items available.");
    }

    console.log("\nType 'add' to add a new menu item, or 'exit' to quit.");
}

// Function to add a new menu item
function addMenuItem() {
    const dishName = prompt("Enter dish name:") || "";
    const description = prompt("Enter dish description:") || "";
    
    // Select the course from predefined list
    let course: Course = 'Starters'; // Default
    const selectedCourse = prompt(`Select course: 1 for Starters, 2 for Mains, 3 for Desserts`);
    
    if (selectedCourse === '1') {
        course = 'Starters';
    } else if (selectedCourse === '2') {
        course = 'Mains';
    } else if (selectedCourse === '3') {
        course = 'Desserts';
    } else {
        console.log("Invalid selection. Defaulting to Starters.");
    }

    // Enter price
    const priceInput = prompt("Enter price:") || "0";
    const price = parseFloat(priceInput);

    // Add the new menu item
    menuItems.push({ dishName, description, course, price });
    console.log("Menu item added successfully!");
}

// Main app function to handle navigation
function runApp() {
    let running = true;

    while (running) {
        const screen = prompt("Type 'home' to go to the home screen, or 'add' to add a new menu item:") || "home";

        // Navigation logic using if statements
        if (screen === 'home') {
            displayHomeScreen();
        } else if (screen === 'add') {
            addMenuItem();
        } else if (screen === 'exit') {
            console.log("Exiting app...");
            running = false;
        } else {
            console.log("Invalid input. Try again.");
        }
    }
}

}