export const androidCollection = {
	name: "Android",
	areas: [
		{
			name: "Language",
			skills: [
				{
					name: "Kotlin",
					description: {
						text: "Kotlin is an open-source statically typed programming language that targets the JVM, Android, JavaScript and Native.",
						links: [
							["What is Kotlin? The Java alternative explained", "https://www.infoworld.com/article/3224868/what-is-kotlin-the-java-alternative-explained.html"],
                            ["Kotlin and Android - Android Developers", "https://developer.android.com/kotlin"]
						]
					}
				},
				{
					name: "Java",
					description: {
						text: "Java is a widely used object-oriented programming language and software platform.",
						links: [
							["What is Java technology and why do I need it?", "https://www.java.com/en/download/help/whatis_java.html"],
                            ["Introduction to Java - W3Schools", "https://www.w3schools.com/java/java_intro.asp"]
						]
					}
				},
			]
		},
		{
			name: "The Fundamentals",
			skills: [
				{
					name: "Android Studio",
					description: {
						text: "Android Studio provides a unified environment where you can build apps for Android phones, tablets, Android Wear, Android TV, and Android Auto.",
						links: [
							["Documentation - Android Developer", "https://developer.android.com/docs?hl=ko"],
                            ["Android Studio Intro", "https://developer.android.com/studio/intro?hl=ko"]
						]
					}
				},
				{
					name: "OOP",
					description: {
						text: "Object-oriented programming (OOP) is a computer programming model that organizes software design around data, or objects, rather than functions and logic.",
						links: [
							["What is Object-Oriented Programming (OOP)?", "https://www.techtarget.com/searchapparchitecture/definition/object-oriented-programming-OOP"],
                            ["Java OOP (Object-Oriented Programming) - W3Schools", "https://www.w3schools.com/java/java_oop.asp"]
						]
					}
				},
				{
					name: "Data Structures",
					description: {
						text: "A data structure is a specialized format for organizing, processing, retrieving and storing data.",
						links: [
							["Definition of Data Structures", "https://www.techtarget.com/searchdatamanagement/definition/data-structure"],
                            ["Data Structure and Types - Programiz", "https://www.programiz.com/dsa/data-structure-types"]
						]
					}
				},
				{
					name: "Algorithm",
					description: {
						text: "An algorithm is a procedure used for solving a problem or performing a computation.",
						links: [
							["Introduction to Algorithms", "https://www.geeksforgeeks.org/introduction-to-algorithms/"],
                            ["Basic Algorithm - an overview", "https://www.sciencedirect.com/topics/computer-science/basic-algorithm"]
						]
					},
				},
				{
					name: "Gradle",
					description: {
						text: "Gradle is a build system (open source) that is used to automate building, testing, deployment.",
						links: [
							["Gradle Build Tool", "https://gradle.org/"],
                            ["Gradle Tutorial - Javatpoint", "https://www.javatpoint.com/gradle"]
						]
					},
				},
			]
		},
		{
			name: "Build an Application",
			skills: [
				{
					name: "Activities and Activity Lifecycles",
					description: {
						text: "Every Activity in android has lifecycle like created, started, resumed, paused, stopped or destroyed.",
						links: [
							["The Activity Lifecycle", "https://developer.android.com/guide/components/activities/activity-lifecycle"]
						]
					}
				},
				{
					name: "Building Flexible Interfaces using Fragments",
					description: {
						text: "Flexible User Interfaces is a key part of proper Android app development.",
						links: [
							["Flexible User Interfaces", "https://guides.codepath.com/android/flexible-user-interfaces"],
                            ["Fragments - Android Developers", "https://developer.android.com/guide/fragments"]
						]
					}
				},
				{
					name: "Debugging using Android Studio Debugger",
					description: {
						text: "The debugger is an essential tool that lets you inspect the execution of the code that powers your Android app so that you can fix any bugs in it.",
						links: [
							["Debug your app - Android Developers", "https://developer.android.com/studio/debug"]
						]
					}
				},
				{
					name: "Content Providers",
					description: {
						text: "A content provider manages access to a central repository of data.",
						links: [
							["Content Provider - Information Technology Glossary - Gartner", "https://www.gartner.com/en/information-technology/glossary/content-provider"],
                            ["Content provider basics - Android Developers", "https://developer.android.com/guide/topics/providers/content-provider-basics"]
						]
					}
				},
				{
					name: "Handling App Configurations",
					description: {
						text: "The managed configurations provider is another app running on the same device.",
						links: [
							["Set up managed configurations - Android Developers", "https://developer.android.com/work/managed-configurations"],
                            ["Handle configuration changes - Android Developers", "https://developer.android.com/guide/topics/resources/runtime-changes"]
						]
					}
				},
				{
					name: "Intents and Context",
					description: {
						text: "Essentially, context is a reference to linking your resources to your program.",
						links: [
							["Setting Intent Context - Amazon Lex - AWS Documentation", "https://docs.aws.amazon.com/lex/latest/dg/context-mgmt-active-context.html"]
						]
					}
				},
				{
					name: "3rd Party Libraries",
					description: {
						text: "A third party library refers to any library where the latest version of the code is not maintained and hosted by Moodle.",
						links: [
							["Plugin with third party libraries - MoodleDocs", "https://docs.moodle.org/dev/Plugin_with_third_party_libraries"]
						]
					}
				},
			]
		},
		{
			name: "Writing Robust Apps",
			skills: [
				{
					name: "Multithreading",
					description: {
						text: "Multithreading in Java is a process of executing multiple threads simultaneously.",
						links: [
							["Definition from Techopedia", "https://www.techopedia.com/definition/24297/multithreading-computer-architecture"]
						]
					},
				},
				{
					name: "Security",
					description: {
						text: "With Android mobile devices being used all over the world, hackers are becoming increasingly vigilant in creating malicious apps and stealing user information.",
						links: [
							["Android Security", "https://source.android.com/docs/security"]
						]
					},
				},
				{
					name: "Testing",
					description: {
						text: "The Android framework includes an integrated testing framework that helps you test all aspects of your application.",
						links: [
							["Android - Testing - Tutorialspoint", "https://www.tutorialspoint.com/android/android_testing.htm"]
						]
					},
					skills: [
						{
							name: "JUnit",
							description: {
								text: "JUnit is a unit testing open-source framework for the Java programming language.",
								links: [
									["JUnit - Overview - Tutorialspoint", "https://www.tutorialspoint.com/junit/junit_overview.htm"]
								]
							},
						},
						{
							name: "Espresso",
							description: {
								text: "Espresso is a testing framework for Android to make it easy to write reliable user interface tests.",
								links: [
									["Espresso - Android Developers", "https://developer.android.com/training/testing/espresso"]
								]
							},
						},
					]
				},
				{
					name: "Dependency Management",
					description: {
						text: "The dependency management section is a mechanism for centralizing dependency information.",
						links: [
							["Introduction to the Dependency Mechanism", "https://maven.apache.org/guides/introduction/introduction-to-dependency-mechanism.html"]
						]
					},
					skills: [
						{
							name: "Dagger",
							description: {
								text: "Dagger is a fully static, compile-time dependency injection framework for both Java and Android.",
								links: [
									["Dagger", "https://dagger.dev/"]
								]
							},
						},
						{
							name: "Koin",
							description: {
								text: "Koin is a pragmatic and lightweight dependency injection framework for Kotlin developers.",
								links: [
									["Koin - The Kotlin Injection Framework", "https://insert-koin.io/"]
								]
							},
						},
					]
				},
				{
					name: "Concurrency",
					description: {
						text: "Concurrency is the concept of executing two or more tasks at the same time.",
						links: [
							["Understanding Concurrency on Android Using HaMeR", "https://code.tutsplus.com/tutorials/concurrency-on-android-using-hamer-framework--cms-27129"]
						]
					},
					skills: [
						{
							name: "RxJava",
							description: {
								text: "RxJava is a Java VM implementation of ReactiveX a library for composing asynchronous and event-based programs by using observable sequences.",
								links: [
									["Introduction to RxJava for Android", "https://www.toptal.com/android/functional-reactive-android-rxjava"]
								]
							},
						},
						{
							name: "Coroutines",
							description: {
								text: "Coroutines are computer program components that generalize subroutines for non-preemptive multitasking, by allowing execution to be suspended and resumed.",
								links: [
									["Coroutines basics", "https://kotlinlang.org/docs/coroutines-basics.html"]
								]
							},
						},
					]
				}
			]
		},
	]
}