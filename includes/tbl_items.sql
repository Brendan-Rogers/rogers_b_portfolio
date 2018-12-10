-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: mysql.brendanrogers.online
-- Generation Time: Dec 09, 2018 at 04:48 PM
-- Server version: 5.6.34-log
-- PHP Version: 7.1.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_brendanrogers`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_items`
--

CREATE TABLE `tbl_items` (
  `id` int(10) UNSIGNED NOT NULL,
  `items_title` varchar(50) NOT NULL,
  `items_info` varchar(1000) NOT NULL,
  `items_pic` varchar(40) NOT NULL,
  `items_tag` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_items`
--

INSERT INTO `tbl_items` (`id`, `items_title`, `items_info`, `items_pic`, `items_tag`) VALUES
(1, 'Pure Volume', 'Brendan developed the front-end functionality for a Pure Volume proof-of-concept website, with the help of Team505. Specifically, Brendan and his fellow developer Drew Shewaga took the opportunity to learn CSS Grid. They utilized Firefox Developer Edition to test, fail, iterate, and ultimately succeed in implementing this new cutting edge layout technology. Team 505 consists of Brendan Rogers, Drew Shewaga, Aiden Riekenbrauck, Christine Lopez, and Ethan Dodd. The product of their effort has been described as \"sellable\".', 'purevolume.png', 'web developing.'),
(2, 'Celtic Videos', 'In his time working as a Counsellor at Camp Celtic, Brendan was responsible for producing over a dozen short promotional films. Over 3 years his editing and filming prowess grew, until eventually his camp movies were flagship promotional material for the camp administration. This was a highly collaborative process, working with the camp higher-ups, talented London drone pilot / cinematographer Jake Godfrey, and young movie making upstart Hanna Koch. His primary tools are a DJi Osmo Mobile 2, Final Cut Pro X, and his Google Pixel 2.', 'celtic.png', 'video marketing.'),
(3, 'Deep Dreaming', 'Brendan Rogers loves digital art, and he loves photography. Over the years, he’s been working on combing these passions in the digital world with deep-learning machine algorithms, producing an impressively large series of art-infused photography. Right now he’s using the website deepdreamgenerator.com, where pieces of his work have been “liked” by dozens of his contemporaries. However, he’s working on using programs like Ubuntu, torch, loadcaffe, jsjohnson’s Neural-Style, and Manuel Ruder’s Artistic-Videos to bring his vision to the medium of video.', 'deepdream.png', 'deep dreaming.'),
(4, 'Writing the Code', 'On all of his projects, Brendan can be found with his nose in the code. A passionate fan of JS, mySQL, and PHP, it\'s not unusual to find Brendan Rogers helping his Fanshawe contemporaries with the more esoteric half of IDP. His main tool belt consists of software like Sublime Text 3, MAMP, Firefox Developer Mode, and Filezilla. His current pursuit is in learning JS native mobile frameworks, such as Vue Native and Expo.', 'code.png', 'writing the code.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_items`
--
ALTER TABLE `tbl_items`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_items`
--
ALTER TABLE `tbl_items`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
