USE [master]
GO
/****** Object:  Database [SafeInformationDB]    Script Date: 2/28/2022 1:14:50 AM ******/
CREATE DATABASE [SafeInformationDB]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'SafeInformationDB', FILENAME = N'C:\Users\itadmin\SafeInformationDB.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'SafeInformationDB_log', FILENAME = N'C:\Users\itadmin\SafeInformationDB_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [SafeInformationDB] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [SafeInformationDB].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [SafeInformationDB] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [SafeInformationDB] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [SafeInformationDB] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [SafeInformationDB] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [SafeInformationDB] SET ARITHABORT OFF 
GO
ALTER DATABASE [SafeInformationDB] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [SafeInformationDB] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [SafeInformationDB] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [SafeInformationDB] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [SafeInformationDB] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [SafeInformationDB] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [SafeInformationDB] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [SafeInformationDB] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [SafeInformationDB] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [SafeInformationDB] SET  DISABLE_BROKER 
GO
ALTER DATABASE [SafeInformationDB] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [SafeInformationDB] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [SafeInformationDB] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [SafeInformationDB] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [SafeInformationDB] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [SafeInformationDB] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [SafeInformationDB] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [SafeInformationDB] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [SafeInformationDB] SET  MULTI_USER 
GO
ALTER DATABASE [SafeInformationDB] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [SafeInformationDB] SET DB_CHAINING OFF 
GO
ALTER DATABASE [SafeInformationDB] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [SafeInformationDB] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [SafeInformationDB] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [SafeInformationDB] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
ALTER DATABASE [SafeInformationDB] SET QUERY_STORE = OFF
GO
USE [SafeInformationDB]
GO
/****** Object:  Table [dbo].[Addresses]    Script Date: 2/28/2022 1:14:50 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Addresses](
	[Id] [uniqueidentifier] NOT NULL,
	[Location] [nvarchar](max) NULL,
	[ContactId] [uniqueidentifier] NOT NULL,
 CONSTRAINT [PK_Addresses] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Contacts]    Script Date: 2/28/2022 1:14:50 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Contacts](
	[InformationsId] [uniqueidentifier] NOT NULL,
	[FullName] [nvarchar](max) NULL,
	[FirstName] [nvarchar](max) NULL,
	[LastName] [nvarchar](max) NULL,
	[Business] [nvarchar](max) NULL,
	[Zip] [nvarchar](max) NULL,
	[Country] [nvarchar](max) NULL,
	[State] [nvarchar](max) NULL,
	[Birthday] [datetime2](7) NULL,
 CONSTRAINT [PK_Contacts] PRIMARY KEY CLUSTERED 
(
	[InformationsId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Container]    Script Date: 2/28/2022 1:14:50 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Container](
	[Id] [uniqueidentifier] NOT NULL,
	[Name] [nvarchar](25) NOT NULL,
	[Favorite] [bit] NOT NULL,
	[UserId] [uniqueidentifier] NOT NULL,
 CONSTRAINT [PK_Container] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Credentials]    Script Date: 2/28/2022 1:14:50 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Credentials](
	[InformationsId] [uniqueidentifier] NOT NULL,
	[UserName] [varchar](max) NULL,
	[Password] [varchar](max) NULL,
 CONSTRAINT [PK_Credentials] PRIMARY KEY CLUSTERED 
(
	[InformationsId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CreditCards]    Script Date: 2/28/2022 1:14:50 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CreditCards](
	[InformationsId] [uniqueidentifier] NOT NULL,
	[Name] [varchar](max) NULL,
	[Number] [varchar](max) NULL,
	[Expiration] [datetime2](7) NOT NULL,
	[Cvv] [varchar](max) NULL,
	[Issuer] [varchar](max) NULL,
 CONSTRAINT [PK_CreditCards] PRIMARY KEY CLUSTERED 
(
	[InformationsId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Emails]    Script Date: 2/28/2022 1:14:50 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Emails](
	[Id] [uniqueidentifier] NOT NULL,
	[Mail] [nvarchar](max) NULL,
	[ContactId] [uniqueidentifier] NOT NULL,
 CONSTRAINT [PK_Emails] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Informations]    Script Date: 2/28/2022 1:14:50 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Informations](
	[Id] [uniqueidentifier] NOT NULL,
	[Name] [nvarchar](25) NOT NULL,
	[Favorite] [bit] NOT NULL,
	[Description] [nvarchar](255) NOT NULL,
	[ContainerId] [uniqueidentifier] NOT NULL,
	[Type] [int] NOT NULL,
	[EncryptionType] [int] NOT NULL,
 CONSTRAINT [PK_Informations] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Keys]    Script Date: 2/28/2022 1:14:50 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Keys](
	[InformationsId] [uniqueidentifier] NOT NULL,
	[Serial] [nvarchar](255) NOT NULL,
 CONSTRAINT [PK_Keys] PRIMARY KEY CLUSTERED 
(
	[InformationsId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Notes]    Script Date: 2/28/2022 1:14:50 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Notes](
	[InformationsId] [uniqueidentifier] NOT NULL,
	[Text] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Notes] PRIMARY KEY CLUSTERED 
(
	[InformationsId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Phones]    Script Date: 2/28/2022 1:14:50 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Phones](
	[Id] [uniqueidentifier] NOT NULL,
	[Number] [nvarchar](max) NULL,
	[ContactId] [uniqueidentifier] NOT NULL,
 CONSTRAINT [PK_Phones] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ShareInformations]    Script Date: 2/28/2022 1:14:50 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ShareInformations](
	[GuessId] [uniqueidentifier] NOT NULL,
	[InformationId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Tags]    Script Date: 2/28/2022 1:14:50 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tags](
	[Id] [uniqueidentifier] NOT NULL,
	[Name] [nvarchar](25) NOT NULL,
	[InformationId] [uniqueidentifier] NOT NULL,
 CONSTRAINT [PK_Tags] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Urls]    Script Date: 2/28/2022 1:14:50 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Urls](
	[Id] [uniqueidentifier] NOT NULL,
	[Address] [nvarchar](max) NULL,
	[CredentialId] [uniqueidentifier] NOT NULL,
 CONSTRAINT [PK_Url] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 2/28/2022 1:14:50 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[Id] [uniqueidentifier] NOT NULL,
	[UserName] [nvarchar](25) NOT NULL,
	[Email] [nvarchar](100) NOT NULL,
	[Password] [nvarchar](max) NOT NULL,
	[FullName] [nvarchar](100) NULL,
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[Addresses]  WITH CHECK ADD  CONSTRAINT [FK_Addresses_Informations_ContactId] FOREIGN KEY([ContactId])
REFERENCES [dbo].[Contacts] ([InformationsId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Addresses] CHECK CONSTRAINT [FK_Addresses_Informations_ContactId]
GO
ALTER TABLE [dbo].[Contacts]  WITH CHECK ADD  CONSTRAINT [FK_Contacts_Informations_InformationsId] FOREIGN KEY([InformationsId])
REFERENCES [dbo].[Informations] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Contacts] CHECK CONSTRAINT [FK_Contacts_Informations_InformationsId]
GO
ALTER TABLE [dbo].[Container]  WITH CHECK ADD  CONSTRAINT [FK_Container_Users_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[Users] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Container] CHECK CONSTRAINT [FK_Container_Users_UserId]
GO
ALTER TABLE [dbo].[Credentials]  WITH CHECK ADD  CONSTRAINT [FK_Credentials_Informations_InformationsId] FOREIGN KEY([InformationsId])
REFERENCES [dbo].[Informations] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Credentials] CHECK CONSTRAINT [FK_Credentials_Informations_InformationsId]
GO
ALTER TABLE [dbo].[Emails]  WITH CHECK ADD  CONSTRAINT [FK_Emails_Contacts_ContactId] FOREIGN KEY([ContactId])
REFERENCES [dbo].[Contacts] ([InformationsId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Emails] CHECK CONSTRAINT [FK_Emails_Contacts_ContactId]
GO
ALTER TABLE [dbo].[Informations]  WITH CHECK ADD  CONSTRAINT [FK_Informations_Containers_ContainerId] FOREIGN KEY([ContainerId])
REFERENCES [dbo].[Container] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Informations] CHECK CONSTRAINT [FK_Informations_Containers_ContainerId]
GO
ALTER TABLE [dbo].[Keys]  WITH CHECK ADD  CONSTRAINT [FK_Keys_Informations_InformationsId] FOREIGN KEY([InformationsId])
REFERENCES [dbo].[Informations] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Keys] CHECK CONSTRAINT [FK_Keys_Informations_InformationsId]
GO
ALTER TABLE [dbo].[Notes]  WITH CHECK ADD  CONSTRAINT [FK_Notes_Informations_InformationsId] FOREIGN KEY([InformationsId])
REFERENCES [dbo].[Informations] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Notes] CHECK CONSTRAINT [FK_Notes_Informations_InformationsId]
GO
ALTER TABLE [dbo].[Phones]  WITH CHECK ADD  CONSTRAINT [FK_Phones_Contacts_InformationsId] FOREIGN KEY([ContactId])
REFERENCES [dbo].[Contacts] ([InformationsId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Phones] CHECK CONSTRAINT [FK_Phones_Contacts_InformationsId]
GO
ALTER TABLE [dbo].[ShareInformations]  WITH CHECK ADD  CONSTRAINT [FK_ShareInformations_Informations_InformationsId] FOREIGN KEY([InformationId])
REFERENCES [dbo].[Informations] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[ShareInformations] CHECK CONSTRAINT [FK_ShareInformations_Informations_InformationsId]
GO
ALTER TABLE [dbo].[ShareInformations]  WITH CHECK ADD  CONSTRAINT [FK_ShareInformations_Users_GuessId] FOREIGN KEY([GuessId])
REFERENCES [dbo].[Users] ([Id])
GO
ALTER TABLE [dbo].[ShareInformations] CHECK CONSTRAINT [FK_ShareInformations_Users_GuessId]
GO
ALTER TABLE [dbo].[Tags]  WITH CHECK ADD  CONSTRAINT [FK_Tags_Informations_InformationsId] FOREIGN KEY([InformationId])
REFERENCES [dbo].[Informations] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Tags] CHECK CONSTRAINT [FK_Tags_Informations_InformationsId]
GO
ALTER TABLE [dbo].[Urls]  WITH CHECK ADD  CONSTRAINT [FK_Url_Credentials_CredentialId] FOREIGN KEY([CredentialId])
REFERENCES [dbo].[Credentials] ([InformationsId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Urls] CHECK CONSTRAINT [FK_Url_Credentials_CredentialId]
GO
USE [master]
GO
ALTER DATABASE [SafeInformationDB] SET  READ_WRITE 
GO
