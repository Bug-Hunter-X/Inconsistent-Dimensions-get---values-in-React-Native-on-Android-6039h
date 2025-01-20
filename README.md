# Inconsistent Dimensions.get() values in React Native on Android

This repository demonstrates a bug in React Native where `Dimensions.get('window')` and `Dimensions.get('screen')` return incorrect or undefined values, particularly on Android devices.  The issue is intermittent, often appearing after screen rotation or other state changes.

## Problem
The `Dimensions` API, crucial for responsive design, sometimes provides inaccurate dimensions, leading to broken layouts.  This is inconsistent and difficult to reproduce reliably.

## Solution
The solution involves using the `useEffect` hook with a `LayoutAnimation` to ensure the dimensions are correctly updated after layout changes, such as screen rotation.  This approach is more robust and handles the inconsistencies of the `Dimensions` API on Android more effectively.