<template>
    <div class="taskseven">
        <h1>Task 7 - Record your mammoth sound effects</h1>
        <!-- <p>Let’s record sound effects for the wooly mammoth in your film! Click the blue button to hear an example, click the red button to record your own mammoth emotion! Let us hear you roarrrrrrr! or roar.</p> -->
        <!-- <div> -->
        <!-- <h1>Record Mammoth Sounds!</h1> -->
        <ul class="mammoth-rows-container">
            <li id="angry" class="mammoth-row">
                <div class="mammoth-row--title">
                    <img src="../assets/inline-angry.svg" alt="Wooly Mammoth" class="mammoth">
                    <!-- <h3>Angry Mammoth - {{angry_pretty_duration}}</h3> -->
                    <div class="mammoth-row-title">
                        <h3>Angry<br />Mammoth</h3>
                        <h4>{{angry_pretty_duration}}</h4>
                    </div>
                    <button v-on:click="playAngryMammothExample" id="mam-angry__sample" class="button__blue button-round sample_button">
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                            <path d="M18.923 24c-2.402 0-3.776-1.891-4.508-4.229-.266-.86-.518-1.786-1.732-3.021-2.214-2.255-3.164-4.829-3.164-7.352 0-4.208 3.316-7.398 6.958-7.398 4.317 0 7.585 3.782 5.438 9.689l-1.915-.689c1.691-4.835-.899-6.764-3.582-6.815-2.328-.045-4.428 2.01-4.715 4.41-.25 2.094.298 4.627 2.3 6.548 1.735 1.664 1.971 2.766 2.288 3.857.731 2.516 1.883 2.903 2.705 2.849 1.923-.127 2.76-2.145.944-4.439l1.822-1.025c.841 1.239 1.231 2.572 1.238 3.615.016 2.45-1.939 4-4.077 4zm-12.267-6.589l-1.387 1.589c-2.612-2.323-4.269-5.714-4.269-9.501 0-3.787 1.657-7.178 4.269-9.5l1.387 1.588c-2.177 1.936-3.56 4.762-3.56 7.912 0 3.15 1.383 5.975 3.56 7.912zm.44-7.912c0-1.891.829-3.586 2.135-4.748l-1.386-1.585c-1.742 1.548-2.845 3.808-2.845 6.333 0 2.525 1.103 4.785 2.845 6.333l1.386-1.585c-1.306-1.162-2.135-2.858-2.135-4.748zm11.536 5.662c-1.24.655-2.362-.289-2.86-1.444-.476-1.101-.187-2.362.767-3.374.657-.697 1.022-1.531.884-2.167-.051-.242-.196-.565-.584-.724-.389-.161-.792-.111-1.117.07-.522.29-.937.995-1.08 1.839l-1.479-.25c.222-1.304.906-2.388 1.831-2.9.731-.405 1.601-.482 2.415-.147.764.314 1.303.969 1.482 1.797.244 1.135-.251 2.44-1.262 3.512 2.06.514 2.312 2.99 1.003 3.788z" />
                        </svg>
                    </button>
                    <div class="dividing-line"></div>
                    <div id="mammoth-row--content__angry" class="mammoth-row--content mammoth-row--content__angry rec-btn-is-visible" v-bind:class="{ recording_in_store : storedMammothAngry }">
                        <button id="mam-angry__recBtn" class="recBtn" data-emotion="angry" :disabled='!this.allowRec' v-on:click="startRecordingAudio"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M15.526 11.409c-1.052.842-7.941 6.358-9.536 7.636l-2.697-2.697 7.668-9.504 4.565 4.565zm5.309-9.867c-2.055-2.055-5.388-2.055-7.443 0-1.355 1.356-1.47 2.842-1.536 3.369l5.61 5.61c.484-.054 2.002-.169 3.369-1.536 2.056-2.055 2.056-5.388 0-7.443zm-9.834 17.94c-2.292 0-3.339 1.427-4.816 2.355-1.046.656-2.036.323-2.512-.266-.173-.211-.667-.971.174-1.842l-.125-.125-1.126-1.091c-1.372 1.416-1.129 3.108-.279 4.157.975 1.204 2.936 1.812 4.795.645 1.585-.995 2.287-2.088 3.889-2.088 1.036 0 1.98.464 3.485 2.773l1.461-.952c-1.393-2.14-2.768-3.566-4.946-3.566z" /></svg> Record your Angry Mammoth</button>
                        <h2 id="mam-angry__countdown" class="countdown"></h2>
                        <progress id="mam-angry__progress" class="progress" max="100" value="0"></progress>
                        <button id="mam-angry__listenBack" class="button__blue listenback-button" v-on:click="playAngryMammothSFX"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                            <path d="M18.923 24c-2.402 0-3.776-1.891-4.508-4.229-.266-.86-.518-1.786-1.732-3.021-2.214-2.255-3.164-4.829-3.164-7.352 0-4.208 3.316-7.398 6.958-7.398 4.317 0 7.585 3.782 5.438 9.689l-1.915-.689c1.691-4.835-.899-6.764-3.582-6.815-2.328-.045-4.428 2.01-4.715 4.41-.25 2.094.298 4.627 2.3 6.548 1.735 1.664 1.971 2.766 2.288 3.857.731 2.516 1.883 2.903 2.705 2.849 1.923-.127 2.76-2.145.944-4.439l1.822-1.025c.841 1.239 1.231 2.572 1.238 3.615.016 2.45-1.939 4-4.077 4zm-12.267-6.589l-1.387 1.589c-2.612-2.323-4.269-5.714-4.269-9.501 0-3.787 1.657-7.178 4.269-9.5l1.387 1.588c-2.177 1.936-3.56 4.762-3.56 7.912 0 3.15 1.383 5.975 3.56 7.912zm.44-7.912c0-1.891.829-3.586 2.135-4.748l-1.386-1.585c-1.742 1.548-2.845 3.808-2.845 6.333 0 2.525 1.103 4.785 2.845 6.333l1.386-1.585c-1.306-1.162-2.135-2.858-2.135-4.748zm11.536 5.662c-1.24.655-2.362-.289-2.86-1.444-.476-1.101-.187-2.362.767-3.374.657-.697 1.022-1.531.884-2.167-.051-.242-.196-.565-.584-.724-.389-.161-.792-.111-1.117.07-.522.29-.937.995-1.08 1.839l-1.479-.25c.222-1.304.906-2.388 1.831-2.9.731-.405 1.601-.482 2.415-.147.764.314 1.303.969 1.482 1.797.244 1.135-.251 2.44-1.262 3.512 2.06.514 2.312 2.99 1.003 3.788z" /></svg>
                        Listen to your Angry Mammoth</button>
                    </div>
                    <div class="status">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z" /></svg>
                    </div>
                </div>
            </li>
            <li id="embar" class="mammoth-row">
                <div class="mammoth-row--title">
                    <img src="../assets/inline-embarrassed.svg" alt="Wooly Mammoth" class="mammoth">
                    <!-- <h3>Embarrassed Mammoth - {{embarrassed_pretty_duration}}</h3> -->
                    <div class="mammoth-row-title">
                        <h3>Embarrassed<br />Mammoth</h3>
                        <h4>{{embarrassed_pretty_duration}}</h4>
                    </div>
                    <button v-on:click="playEmbarrassedMammothExample" id="mam-embarrassed__sample" class="button__blue button-round sample_button"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                            <path d="M18.923 24c-2.402 0-3.776-1.891-4.508-4.229-.266-.86-.518-1.786-1.732-3.021-2.214-2.255-3.164-4.829-3.164-7.352 0-4.208 3.316-7.398 6.958-7.398 4.317 0 7.585 3.782 5.438 9.689l-1.915-.689c1.691-4.835-.899-6.764-3.582-6.815-2.328-.045-4.428 2.01-4.715 4.41-.25 2.094.298 4.627 2.3 6.548 1.735 1.664 1.971 2.766 2.288 3.857.731 2.516 1.883 2.903 2.705 2.849 1.923-.127 2.76-2.145.944-4.439l1.822-1.025c.841 1.239 1.231 2.572 1.238 3.615.016 2.45-1.939 4-4.077 4zm-12.267-6.589l-1.387 1.589c-2.612-2.323-4.269-5.714-4.269-9.501 0-3.787 1.657-7.178 4.269-9.5l1.387 1.588c-2.177 1.936-3.56 4.762-3.56 7.912 0 3.15 1.383 5.975 3.56 7.912zm.44-7.912c0-1.891.829-3.586 2.135-4.748l-1.386-1.585c-1.742 1.548-2.845 3.808-2.845 6.333 0 2.525 1.103 4.785 2.845 6.333l1.386-1.585c-1.306-1.162-2.135-2.858-2.135-4.748zm11.536 5.662c-1.24.655-2.362-.289-2.86-1.444-.476-1.101-.187-2.362.767-3.374.657-.697 1.022-1.531.884-2.167-.051-.242-.196-.565-.584-.724-.389-.161-.792-.111-1.117.07-.522.29-.937.995-1.08 1.839l-1.479-.25c.222-1.304.906-2.388 1.831-2.9.731-.405 1.601-.482 2.415-.147.764.314 1.303.969 1.482 1.797.244 1.135-.251 2.44-1.262 3.512 2.06.514 2.312 2.99 1.003 3.788z" /></svg></button>
                    <div class="dividing-line"></div>

                    <div id="mammoth-row--content__embarrassed" class="mammoth-row--content mammoth-row--content__embarrassed rec-btn-is-visible" v-bind:class="{ recording_in_store : storedMammothEmbarrassed }">
                        <button id="mam-embarrassed__recBtn" class="recBtn" data-emotion="embarrassed" :disabled='!this.allowRec' v-on:click="startRecordingAudio"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M15.526 11.409c-1.052.842-7.941 6.358-9.536 7.636l-2.697-2.697 7.668-9.504 4.565 4.565zm5.309-9.867c-2.055-2.055-5.388-2.055-7.443 0-1.355 1.356-1.47 2.842-1.536 3.369l5.61 5.61c.484-.054 2.002-.169 3.369-1.536 2.056-2.055 2.056-5.388 0-7.443zm-9.834 17.94c-2.292 0-3.339 1.427-4.816 2.355-1.046.656-2.036.323-2.512-.266-.173-.211-.667-.971.174-1.842l-.125-.125-1.126-1.091c-1.372 1.416-1.129 3.108-.279 4.157.975 1.204 2.936 1.812 4.795.645 1.585-.995 2.287-2.088 3.889-2.088 1.036 0 1.98.464 3.485 2.773l1.461-.952c-1.393-2.14-2.768-3.566-4.946-3.566z" /></svg> Record your Embarrassed Mammoth</button>
                        <h2 id="mam-embarrassed__countdown" class="countdown"></h2>
                        <progress id="mam-embarrassed__progress" class="progress" max="100" value="0"></progress>
                        <button id="mam-embarrassed__listenBack" v-bind:class="storedMammothEmbarrassed" class="button__blue listenback-button" v-on:click="playEmbarrassedMammothSFX"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                            <path d="M18.923 24c-2.402 0-3.776-1.891-4.508-4.229-.266-.86-.518-1.786-1.732-3.021-2.214-2.255-3.164-4.829-3.164-7.352 0-4.208 3.316-7.398 6.958-7.398 4.317 0 7.585 3.782 5.438 9.689l-1.915-.689c1.691-4.835-.899-6.764-3.582-6.815-2.328-.045-4.428 2.01-4.715 4.41-.25 2.094.298 4.627 2.3 6.548 1.735 1.664 1.971 2.766 2.288 3.857.731 2.516 1.883 2.903 2.705 2.849 1.923-.127 2.76-2.145.944-4.439l1.822-1.025c.841 1.239 1.231 2.572 1.238 3.615.016 2.45-1.939 4-4.077 4zm-12.267-6.589l-1.387 1.589c-2.612-2.323-4.269-5.714-4.269-9.501 0-3.787 1.657-7.178 4.269-9.5l1.387 1.588c-2.177 1.936-3.56 4.762-3.56 7.912 0 3.15 1.383 5.975 3.56 7.912zm.44-7.912c0-1.891.829-3.586 2.135-4.748l-1.386-1.585c-1.742 1.548-2.845 3.808-2.845 6.333 0 2.525 1.103 4.785 2.845 6.333l1.386-1.585c-1.306-1.162-2.135-2.858-2.135-4.748zm11.536 5.662c-1.24.655-2.362-.289-2.86-1.444-.476-1.101-.187-2.362.767-3.374.657-.697 1.022-1.531.884-2.167-.051-.242-.196-.565-.584-.724-.389-.161-.792-.111-1.117.07-.522.29-.937.995-1.08 1.839l-1.479-.25c.222-1.304.906-2.388 1.831-2.9.731-.405 1.601-.482 2.415-.147.764.314 1.303.969 1.482 1.797.244 1.135-.251 2.44-1.262 3.512 2.06.514 2.312 2.99 1.003 3.788z" /></svg>
                        Listen to your Embarrassed Mammoth</button>
                    </div>
                    <div class="status">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z" /></svg>
                    </div>
                </div>
            </li>
            <li id="laugh" class="mammoth-row">
                <div class="mammoth-row--title">
                    <img src="../assets/inline-laughing.svg" alt="Wooly Mammoth" class="mammoth">
                    <!-- <h3>Laughing Mammoth - {{laugh_pretty_duration}}</h3> -->
                    <div class="mammoth-row-title">
                        <h3>Laughing<br />Mammoth</h3>
                        <h4>{{laugh_pretty_duration}}</h4>
                    </div>
                    <button v-on:click="playLaughMammothExample" id="mam-laugh__sample" class="button__blue button-round sample_button"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                            <path d="M18.923 24c-2.402 0-3.776-1.891-4.508-4.229-.266-.86-.518-1.786-1.732-3.021-2.214-2.255-3.164-4.829-3.164-7.352 0-4.208 3.316-7.398 6.958-7.398 4.317 0 7.585 3.782 5.438 9.689l-1.915-.689c1.691-4.835-.899-6.764-3.582-6.815-2.328-.045-4.428 2.01-4.715 4.41-.25 2.094.298 4.627 2.3 6.548 1.735 1.664 1.971 2.766 2.288 3.857.731 2.516 1.883 2.903 2.705 2.849 1.923-.127 2.76-2.145.944-4.439l1.822-1.025c.841 1.239 1.231 2.572 1.238 3.615.016 2.45-1.939 4-4.077 4zm-12.267-6.589l-1.387 1.589c-2.612-2.323-4.269-5.714-4.269-9.501 0-3.787 1.657-7.178 4.269-9.5l1.387 1.588c-2.177 1.936-3.56 4.762-3.56 7.912 0 3.15 1.383 5.975 3.56 7.912zm.44-7.912c0-1.891.829-3.586 2.135-4.748l-1.386-1.585c-1.742 1.548-2.845 3.808-2.845 6.333 0 2.525 1.103 4.785 2.845 6.333l1.386-1.585c-1.306-1.162-2.135-2.858-2.135-4.748zm11.536 5.662c-1.24.655-2.362-.289-2.86-1.444-.476-1.101-.187-2.362.767-3.374.657-.697 1.022-1.531.884-2.167-.051-.242-.196-.565-.584-.724-.389-.161-.792-.111-1.117.07-.522.29-.937.995-1.08 1.839l-1.479-.25c.222-1.304.906-2.388 1.831-2.9.731-.405 1.601-.482 2.415-.147.764.314 1.303.969 1.482 1.797.244 1.135-.251 2.44-1.262 3.512 2.06.514 2.312 2.99 1.003 3.788z" /></svg></button>
                    <div class="dividing-line"></div>
                    <div id="mammoth-row--content__laugh" class="mammoth-row--content mammoth-row--content__laugh rec-btn-is-visible" v-bind:class="{ recording_in_store : storedMammothLaugh }">
                        <button id="mam-laugh__recBtn" class="recBtn" data-emotion="laugh" :disabled='!this.allowRec' v-on:click="startRecordingAudio"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M15.526 11.409c-1.052.842-7.941 6.358-9.536 7.636l-2.697-2.697 7.668-9.504 4.565 4.565zm5.309-9.867c-2.055-2.055-5.388-2.055-7.443 0-1.355 1.356-1.47 2.842-1.536 3.369l5.61 5.61c.484-.054 2.002-.169 3.369-1.536 2.056-2.055 2.056-5.388 0-7.443zm-9.834 17.94c-2.292 0-3.339 1.427-4.816 2.355-1.046.656-2.036.323-2.512-.266-.173-.211-.667-.971.174-1.842l-.125-.125-1.126-1.091c-1.372 1.416-1.129 3.108-.279 4.157.975 1.204 2.936 1.812 4.795.645 1.585-.995 2.287-2.088 3.889-2.088 1.036 0 1.98.464 3.485 2.773l1.461-.952c-1.393-2.14-2.768-3.566-4.946-3.566z" /></svg> Record your laughing Mammoth</button>
                        <h2 id="mam-laugh__countdown" class="countdown"></h2>
                        <progress id="mam-laugh__progress" class="progress" max="100" value="0"></progress>
                        <button id="mam-laugh__listenBack" v-bind:class="storedMammothLaugh" class="button__blue listenback-button" v-on:click="playLaughMammothSFX"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                            <path d="M18.923 24c-2.402 0-3.776-1.891-4.508-4.229-.266-.86-.518-1.786-1.732-3.021-2.214-2.255-3.164-4.829-3.164-7.352 0-4.208 3.316-7.398 6.958-7.398 4.317 0 7.585 3.782 5.438 9.689l-1.915-.689c1.691-4.835-.899-6.764-3.582-6.815-2.328-.045-4.428 2.01-4.715 4.41-.25 2.094.298 4.627 2.3 6.548 1.735 1.664 1.971 2.766 2.288 3.857.731 2.516 1.883 2.903 2.705 2.849 1.923-.127 2.76-2.145.944-4.439l1.822-1.025c.841 1.239 1.231 2.572 1.238 3.615.016 2.45-1.939 4-4.077 4zm-12.267-6.589l-1.387 1.589c-2.612-2.323-4.269-5.714-4.269-9.501 0-3.787 1.657-7.178 4.269-9.5l1.387 1.588c-2.177 1.936-3.56 4.762-3.56 7.912 0 3.15 1.383 5.975 3.56 7.912zm.44-7.912c0-1.891.829-3.586 2.135-4.748l-1.386-1.585c-1.742 1.548-2.845 3.808-2.845 6.333 0 2.525 1.103 4.785 2.845 6.333l1.386-1.585c-1.306-1.162-2.135-2.858-2.135-4.748zm11.536 5.662c-1.24.655-2.362-.289-2.86-1.444-.476-1.101-.187-2.362.767-3.374.657-.697 1.022-1.531.884-2.167-.051-.242-.196-.565-.584-.724-.389-.161-.792-.111-1.117.07-.522.29-.937.995-1.08 1.839l-1.479-.25c.222-1.304.906-2.388 1.831-2.9.731-.405 1.601-.482 2.415-.147.764.314 1.303.969 1.482 1.797.244 1.135-.251 2.44-1.262 3.512 2.06.514 2.312 2.99 1.003 3.788z" /></svg>
                        Listen to your laughing Mammoth</button>
                    </div>
                    <div class="status">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z" /></svg>
                    </div>
                </div>
            </li>
        </ul>
        <!-- </div> -->
        <!--     <router-link to="/taskeight" class="button router-link">When you're ready, click here to continue!</router-link> -->
        <div class="next-cta">
            <p>When you're ready, click the red button to continue</p>
            <router-link to="/taskeight" class="button button__disabled button-round router-link">
                <!-- <img src="../assets/iconmonstr-arrow-1.svg" /> -->
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M13 7v-6l11 11-11 11v-6h-13v-10z" /></svg>
            </router-link>
        </div>
    </div>
</template>
<script>
// import { howler } from 'howler';
// import { Recorder } from 'Recorder';
// import Recorder from 'recorder-js';
// import MicRecorder from 'MicRecorder';
import { MicRecorder } from 'mic-recorder-to-mp3';

import { EventBus } from '../main';

export default {
    name: 'taskseven',
    methods: {

        requestsAccessToMic: function(e) {
            // const AudioContext = window.AudioContext || window.webkitAudioContext;
            // this.context = new AudioContext();
            // // this.config.sampleRate = this.context.sampleRate;
            // this.lameEncoder = new Encoder(this.config);

            // const audio = this.config.deviceId ? { deviceId: { exact: this.config.deviceId } } : true;

            // navigator.mediaDevices.getUserMedia({video: false, audio: true}).then( stream => {
            //   // window.localStream = stream; // A
            //   // window.localAudio.srcObject = stream; // B
            //   // window.localAudio.autoplay = true; // C
            // }).catch( err => {
            //   console.log("u got an error:" + err)
            // });

            navigator.mediaDevices.getUserMedia({ video: false, audio: true });

            // navigator.mediaDevices.getUserMedia();

            // return new Promise((resolve, reject) => {
            //   navigator.mediaDevices.getUserMedia({ audio })
            //     // .then(stream => {
            //     //   this.addMicrophoneListener(stream);
            //     //   resolve(stream);
            //     // }).catch(function(err) {
            //     //   reject(err);
            //     // });
            // })
        },

        startRecordingAudio: function(e) {

            EventBus.$emit('stopVO');
            // Emit call to stop Task VO

            /// Grab the mic
            const MicRecorder = require('mic-recorder-to-mp3');
            const ref = this;

            var emotion = event.target.getAttribute('data-emotion');
            console.log(emotion);

            // console.log('Start Recording!');

            // New instance
            const recorder = new MicRecorder({ bitRate: 128 });

            // let listenBack = null;
            let container = null;
            let progress = null;
            let countdown = null;
            let duration = null;

            // Get elements according to emotion
            if (emotion == 'angry') {
                // listenBack  = document.getElementById('mam-angry__listenBack');
                container = document.getElementById("mammoth-row--content__angry");
                progress = document.getElementById("mam-angry__progress");
                countdown = document.getElementById("mam-angry__countdown");
                duration = this.mammoth_angry_duration
            } else if (emotion == 'embarrassed') {
                // listenBack  = document.getElementById('mam-embarrassed__listenBack');
                container = document.getElementById("mammoth-row--content__embarrassed");
                progress = document.getElementById("mam-embarrassed__progress");
                countdown = document.getElementById("mam-embarrassed__countdown");
                duration = this.mammoth_embarrassed_duration
            } else if (emotion == 'laugh') {
                // listenBack  = document.getElementById('mam-laugh__listenBack');
                container = document.getElementById("mammoth-row--content__laugh");
                progress = document.getElementById("mam-laugh__progress");
                countdown = document.getElementById("mam-laugh__countdown");
                duration = this.mammoth_laugh_duration
            }

            // remove old players
            // while (listenBack.firstChild) {
            //   listenBack.removeChild(listenBack.firstChild);
            // }

            container.classList.remove('rec-btn-is-visible');
            container.classList.add('recording-is-happening');

            // reset vars
            progress.value = 0;
            countdown.innerHTML = "Get Ready!";

            // countdown Time
            var timeleft = 3;

            // Timer...
            var downloadTimer = setInterval(function() {
                console.log('downloadTimer!');
                if (timeleft <= 0) {
                    console.log('times up!');
                    clearInterval(downloadTimer);
                    countdown.innerHTML = "Go!";
                    startRecording();
                } else {
                    console.log('get readty called!');
                    // countdown.innerHTML = "Get Ready..." + timeleft;
                    countdown.innerHTML = "" + timeleft;
                }
                timeleft -= 1;
            }, 1000);

            // start Recording
            function startRecording() {

                // Start recording. Browser will request permission to use your microphone.
                recorder.start().then(() => {
                    // something else
                }).catch((e) => {
                    console.error(e);
                });

                setTimeout(stopRec, duration);

                var intervalID = window.setInterval(myCallback, (duration / 100));

                function myCallback() {
                    // better way to do it?
                    // https://stackoverflow.com/questions/31106189/create-a-simple-10-second-countdown
                    progress.value += 1;
                    if (progress.value >= '100') {
                        window.clearInterval(intervalID);
                    }
                }

            }

            function stopRec() {

                console.log('StopRec!');

                recorder.stop().getMp3().then(([buffer, blob]) => {

                    // console.log(buffer, blob);
                    console.log({ blob });
                    const file = new File(buffer, 'mammoth_' + emotion + '.mp3', {
                        type: blob.type,
                        lastModified: Date.now()
                    });

                    // const li = document.createElement('li');
                    const player = new Audio(URL.createObjectURL(file));
                    player.controls = true;
                    // li.appendChild(player);

                    // ref.$store.commit('setMammothAngry', blob);

                    if (emotion == 'angry') {
                        ref.$store.commit('setMammothAngry', blob);
                        const mammRow = document.getElementById("angry");
                        mammRow.classList.add('is-active');
                        EventBus.$emit('audioRecorded', 'angry');
                    } else if (emotion == 'embarrassed') {
                        ref.$store.commit('setMammothEmbarrassed', blob);
                        const mammRow = document.getElementById("embar");
                        mammRow.classList.add('is-active');
                        EventBus.$emit('audioRecorded', 'embar');
                    } else if (emotion == 'laugh') {
                        ref.$store.commit('setMammothLaugh', blob);
                        const mammRow = document.getElementById("laugh");
                        mammRow.classList.add('is-active');
                        EventBus.$emit('audioRecorded', 'laugh');
                    }

                    // listenBack.appendChild(player);

                    container.classList.remove('recording-is-happening');
                    container.classList.add('rec-btn-is-visible');

                }).catch((e) => {
                    console.error(e);
                });

            }

        },

        // const button = document.querySelector('button');
        //     const recorder = new MicRecorder({
        //       bitRate: 128
        //     });

        //     button.addEventListener('click', startRecording);

        //     function startRecording() {
        //       recorder.start().then(() => {
        //         button.textContent = 'Stop recording';
        //         button.classList.toggle('btn-danger');
        //         button.removeEventListener('click', startRecording);
        //         button.addEventListener('click', stopRecording);
        //       }).catch((e) => {
        //         console.error(e);
        //       });
        //     }

        //     function stopRecording() {
        //       recorder.stop().getMp3().then(([buffer, blob]) => {
        //         console.log(buffer, blob);
        //         const file = new File(buffer, 'music.mp3', {
        //           type: blob.type,
        //           lastModified: Date.now()
        //         });

        //         const li = document.createElement('li');
        //         const player = new Audio(URL.createObjectURL(file));
        //         player.controls = true;
        //         li.appendChild(player);
        //         document.querySelector('#playlist').appendChild(li);

        //         button.textContent = 'Start recording';
        //         button.classList.toggle('btn-danger');
        //         button.removeEventListener('click', stopRecording);
        //         button.addEventListener('click', startRecording);
        //       }).catch((e) => {
        //         console.error(e);
        //       });
        //     }

        // setAllowRec: function(val){
        //   console.log('val', val);
        //   if(val == 'true') {
        //     this.allowRec = 'true';
        //   } else {
        //     this.allowRec = 'false';          
        //   }
        // }

        playAngryMammothExample() {
            console.log('play AngryMammothExample via Howler');
            const $mammoth_angry_mp3 = 'images/mp3/mammoth/mam_angry.mp3';
            var howlSound = new Howl({
                autoplay: true,
                src: [ $mammoth_angry_mp3 ],
            })
            EventBus.$emit('stopVO');
            // Emit call to stop Task VO
        },

        playEmbarrassedMammothExample() {
            console.log('play EmbarrassedMammothExample via Howler');
            const $mammoth_embar_mp3 = 'images/mp3/mammoth/mam_embar.mp3';
            var howlSound = new Howl({
                autoplay: true,
                src: [ $mammoth_embar_mp3 ],
            })
            EventBus.$emit('stopVO');
            // Emit call to stop Task VO
        },

        playLaughMammothExample() {
            console.log('play LaughMammothExample via Howler');
            const $mammoth_laugh_mp3 = 'images/mp3/mammoth/mam_laugh.mp3';
            var howlSound = new Howl({
                autoplay: true,
                src: [ $mammoth_laugh_mp3 ],
            })
            EventBus.$emit('stopVO');
            // Emit call to stop Task VO
        },

        playAngryMammothSFX() {
            console.log('play AngryMammothSFX via Howler');
            var blob = new Blob([this.$store.state.mammoth_angry]);
            var howlSound = new Howl({
                autoplay: true,
                src: [URL.createObjectURL(blob)],
                html5: true,
                format: ['mp3'],
            })
            EventBus.$emit('stopVO');
            // Emit call to stop Task VO
        },

        playEmbarrassedMammothSFX() {
            console.log('play EmbarrassedMammothSFX via Howler');
            var blob = new Blob([this.$store.state.mammoth_embarrassed]);
            var howlSound = new Howl({
                autoplay: true,
                src: [URL.createObjectURL(blob)],
                html5: true,
                format: ['mp3'],
            })
            EventBus.$emit('stopVO');
            // Emit call to stop Task VO
        },

        playLaughMammothSFX() {
            console.log('play LaughMammothSFX via Howler');
            var blob = new Blob([this.$store.state.mammoth_laugh]);
            var howlSound = new Howl({
                autoplay: true,
                src: [URL.createObjectURL(blob)],
                html5: true,
                format: ['mp3'],
            })
            EventBus.$emit('stopVO');
            // Emit call to stop Task VO
        }

    },



    computed: {

        millisToMinutesAndSeconds: function(millis) {
            var minutes = Math.floor(millis / 60000);
            var seconds = ((millis % 60000) / 1000).toFixed(0);
            return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
        },

        storedMammothAngry() {
            return this.$store.state.mammoth_angry;
        },
        storedMammothEmbarrassed() {
            return this.$store.state.mammoth_embarrassed;
        },
        storedMammothLaugh() {
            return this.$store.state.mammoth_laugh;
        },
        angry_pretty_duration() {
            var minutes = Math.floor(this.mammoth_angry_duration / 60000);
            var seconds = ((this.mammoth_angry_duration % 60000) / 1000).toFixed(0);
            // return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
            // return (seconds < 10 ? '0' : '') + seconds + " seconds";
            return seconds + " seconds";
            // return this.millisToMinutesAndSeconds();
        },
        embarrassed_pretty_duration() {
            var minutes = Math.floor(this.mammoth_embarrassed_duration / 60000);
            var seconds = ((this.mammoth_embarrassed_duration % 60000) / 1000).toFixed(0);
            // return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
            // return (seconds < 10 ? '0' : '') + seconds + " seconds";
            return seconds + " seconds";
            // return this.millisToMinutesAndSeconds(this.mammoth_embarrassed_duration);
        },
        laugh_pretty_duration() {
            var minutes = Math.floor(this.mammoth_laugh_duration / 60000);
            var seconds = ((this.mammoth_laugh_duration % 60000) / 1000).toFixed(0);
            // return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
            // return (seconds < 10 ? '0' : '') + seconds + " seconds";
            return seconds + " seconds";
            // return this.millisToMinutesAndSeconds(this.mammoth_laugh_duration);
        },
    },

    beforeUpdate() {

    },

    data: () => ({
        allowRec: true,
        // savedCanvas: null,
        // canvas: "",
        // URL = window.URL || window.webkitURL;
        gumStream: "", // stream from getUserMedia()
        rec: "", // Recorder.js object
        input: "", // MediaStreamAudioSourceNode we'll be recording
        // shim for AudioContext when it's not avb. 
        AudioContext: window.AudioContext || window.webkitAudioContext,
        audioContext: "",
        mammoth_angry: "",
        mammoth_angry_duration: 4000, // in miliseconds
        mammoth_embarrassed: "",
        mammoth_embarrassed_duration: 5000, // in miliseconds
        mammoth_laugh: "",
        mammoth_laugh_duration: 4000, // in miliseconds
        angryRecorded: null,
        embarRecorded: null,
        laughRecorded: null,


    }),

    created() {

      EventBus.$on('audioRecorded', (data) => {
        console.log('audioRecorded: ', data);    
        // this.router.go({ name: 'endscreen' });
        // this.startScene(data);
        if (data == 'angry') { this.$refs.angryRecorded = true; }
        if (data == 'embar') { this.$refs.embarRecorded = true; }
        if (data == 'laugh') { this.$refs.laughRecorded = true; }
        

        if (this.$refs.angryRecorded && this.$refs.embarRecorded && this.$refs.laughRecorded) {
          console.log('ready to progress');
          // document.querySelector('.next-cta').classList.remove('button__disabled');
          document.querySelector('.router-link').classList.remove('button__disabled');
        }
      });

      EventBus.$on('stopVO', () => {
        console.log('stopVO on Task 7');   

        this.$parent.$parent.stopTaskTracks();

        // this.router.go({ name: 'endscreen' });
        // this.gotoEndScreen();
      });

    },

    mounted() {



        // this.ref = this.$refs.myCanvas;
        // this.canvas = new fabric.Canvas(this.ref, {
        //   isDrawingMode: true
        // });

        // this.canvas.freeDrawingBrush.width = 10;

        // var rect = new fabric.Rect({
        //   left: 100,
        //   top: 50,
        //   width: 100,
        //   height: 100,
        //   fill: 'black',
        //   angle: 20,
        //   padding: 10
        // });
        // this.canvas.add(rect);

    }

};
</script>
<style lang="scss" scoped>
.mammoth {
    width: 100px;
}

.mammoth-rows-container {
    width: 100%;
}

.mammoth-row {
    display: flex;
    /*justify-content: space-between;*/
    justify-content: flex-start;
    // flex-direction: column;
    /*justify-content: flex-start;*/
    // margin-bottom: 6rem;
    margin-top: 1rem;
    border-bottom: 1px solid red;
    width: 100%;

    .button-round {
        width: 65px;
        height: 65px;
        svg {
            width: auto;
            height: auto;
        }
    }
}

.mammoth-row--title,
.mammoth-row--content {
    display: flex;
    justify-content: center;
}

.mammoth-row--title {
    align-items: center;
    margin-bottom: 1rem;
    justify-content: center;

    >* {
        margin: 0 0.8rem;
    }
}

.mammoth-row-title {
    min-width: 120px;
}

// .sample_button {
//     &:after {
//         content: "";
//         position: relative;
//         right: -10px;
//         border-right: 1px solid red;
//     }
// }

.dividing-line {
    background: #e6d9c1;
    width: 1px;
    height: 100%;
}

.mammoth-row--content {
    >* {
        display: none;
        margin: 0 0.5rem;
    }

    &.rec-btn-is-visible {
        .recBtn {
            display: block;
        }
    }

    // &.playback-btn-is-visible {
    //   .listenback-button { display: block; }
    // }
    &.recording_in_store {
        .listenback-button {
            display: block;
        }
    }

    &.recording-is-happening {
        .recBtn {
            display: none;
        }

        .countdown {
            display: block;
        }

        .progress {
            display: block;
        }

        .listenback-button {
            display: none;
        }
    }
}

/* .mammoth-row--title button svg path {
    fill: white;
  }*/

// .mammoth-row--title button {
//   border-radius: 200px;
//   height: 60px;
//   width: 60px;
//   padding: 10px;
// }

.mammoth-row--content {
    align-items: center;
}

.mammoth-row--title>*,
.mammoth-row--content>* {
    /*flex: 1 0 1/6fr;*/
}

.mammoth-row.is-active {
  .status {
    opacity: 1;
        svg {
            path {
                fill: green;
            }
        }
    }

}



/*.is-active {
    outline: 4px solid red !important;
  }*/
</style>